import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { dirname } from "path";

const RESUME_URL = "https://resume.milind.app/?expand=true";

export async function printResumeToPdf() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(RESUME_URL, {
    waitUntil: "networkidle0",
  });

  const currentYear = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    new Date()
  );

  const FILE_PATH = `dist/Milind_Mishra_Resume_${currentYear}.pdf`;

  await mkdir(dirname(FILE_PATH), { recursive: true });

  await page.pdf({
    path: FILE_PATH,
    format: "A4",
    printBackground: true,
    margin: {
      top: "1cm",
      bottom: "1cm",
      left: "1cm",
      right: "1cm",
    },
  });

  await browser.close();
}
