import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "../firebase"; // tu inicialización de Firebase

export const generatePDFCloud = async (latexContent, userId) => {
  const functions = getFunctions(app);
  const generatePDF = httpsCallable(functions, "generatePDF");
  const result = await generatePDF({ latexContent, userId });
  return result.data.pdfUrl;
};
