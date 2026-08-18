const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function generate() {
  const iconSvgPath = path.join(__dirname, '..', 'public', 'icon.svg');
  const svgContent = fs.readFileSync(iconSvgPath);

  console.log('Generating icons from public/icon.svg...');

  // 1. Generate PNGs of various sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngs = {};
  for (const size of sizes) {
    pngs[size] = await sharp(svgContent)
      .resize(size, size)
      .png()
      .toBuffer();
    console.log(`Generated ${size}x${size} PNG (${pngs[size].length} bytes)`);
  }

  // 2. Generate ICO file containing 16x16, 32x32, 48x48
  const icoBuffer = await createIco([
    { width: 16, height: 16, buffer: pngs[16] },
    { width: 32, height: 32, buffer: pngs[32] },
    { width: 48, height: 48, buffer: pngs[48] },
  ]);

  // Write favicon.ico
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, '..', 'app', 'favicon.ico'), icoBuffer);
  console.log('Wrote public/favicon.ico and app/favicon.ico');

  // Write apple-icon.png (180x180)
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'apple-icon.png'), pngs[180]);
  fs.writeFileSync(path.join(__dirname, '..', 'app', 'apple-icon.png'), pngs[180]);
  console.log('Wrote public/apple-icon.png and app/apple-icon.png');

  // Write icon-light-32x32.png and icon-dark-32x32.png
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'icon-light-32x32.png'), pngs[32]);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'icon-dark-32x32.png'), pngs[32]);
  console.log('Wrote public/icon-light-32x32.png and public/icon-dark-32x32.png');

  // Write icon-192.png and icon-512.png
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'icon-192.png'), pngs[192]);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'icon-512.png'), pngs[512]);
  console.log('Wrote public/icon-192.png and public/icon-512.png');

  // Overwrite placeholder-logo.png and placeholder-logo.svg with Devtacet logo
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'placeholder-logo.png'), pngs[512]);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'placeholder-logo.svg'), svgContent);
  console.log('Replaced placeholder-logo.png and placeholder-logo.svg');

  // 3. Generate OG image (1200x630) with Devtacet branding
  // We composite the 280x280 Devtacet icon onto a sleek dark background (#16141f) with subtle glow
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0e0d14"/>
          <stop offset="50%" stop-color="#16141f"/>
          <stop offset="100%" stop-color="#0a0910"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#06B6D4" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06B6D4" />
          <stop offset="100%" stop-color="#0891b2" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bgGrad)"/>
      <circle cx="600" cy="240" r="320" fill="url(#glow)"/>
      
      <!-- Icon centered at top -->
      <g transform="translate(480, 70) scale(0.48)">
        <path fill="url(#cyanGrad)" fill-rule="evenodd" d="M98,79 L338,79 L406,146 L406,309 L311,392 L98,392 Z M98,79 L189,150 L258,150 L375,235 L243,325 L209,325 L98,392 L165,315 L165,197 Z"/>
      </g>
      
      <!-- Text -->
      <text x="600" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="58" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-1">Devtacet</text>
      <text x="600" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="500" fill="#06B6D4" text-anchor="middle" letter-spacing="2">DIGITAL STUDIO</text>
      <text x="600" y="500" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#94A3B8" text-anchor="middle">Mobile Apps • Websites • Data Analytics • AI SEO</text>
    </svg>
  `;

  const ogBuffer = await sharp(Buffer.from(ogSvg))
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'og-image.png'), ogBuffer);
  console.log('Wrote public/og-image.png (1200x630)');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
