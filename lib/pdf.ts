import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function generateHelloPdf(name: string) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const text = `Hello, ${name}!`;
  const textWidth = font.widthOfTextAtSize(text, 32);

  page.drawText(text, {
    x: (width - textWidth) / 2,
    y: height / 2,
    size: 32,
    color: rgb(30 / 255, 156 / 255, 137 / 255)
  });

  const bytes = await pdfDoc.save();
  return bytes; // Uint8Array
}
