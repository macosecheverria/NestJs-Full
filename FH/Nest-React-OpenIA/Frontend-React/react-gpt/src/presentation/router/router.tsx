import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    AssistantPage,
    AudioToTextPage,
  ImageGenerationPage,
  ImageTunningPage,
  OrthographyPage,
  ProsConsPage,
  ProsConsStreamPage,
  TextToAudioPage,
  TranslatePage,
} from "../pages";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const menuRoutes = [
  {
    to: "/orthography",
    icon: "fa-solid fa-spell-check",
    title: "ortografia",
    description: "Corregir ortografia",
    component: <OrthographyPage />,
  },

  {
    to: "/pros-cons",
    icon: "fa-solid fa-code-compare",
    title: "Pros & Cons",
    description: "Comparar pros y contras",
    component: <ProsConsPage />,
  },

  {
    to: "/pros-cons-stream",
    icon: "fa-solid fa-water",
    title: "Como stream",
    description: "Con stream de mensajes",
    component: <ProsConsStreamPage />,
  },
  {
    to: "/translate",
    icon: "fa-solid fa-language",
    title: "Traducir",
    description: "Textos en otros idiomas",
    component: <TranslatePage />,
  },
  {
    to: "/text-to-audio",
    icon: "fa-solid fa-podcast",
    title: "Texto o audio",
    description: "Convertir texto a audio",
    component: <TextToAudioPage />,
  },
  {
    to: "/image-generation",
    icon: "fa-solid fa-image",
    title: "Imagenes",
    description: "Generar imagenes",
    component: <ImageGenerationPage />,
  },

  {
    to: "/image-tunning",
    icon: "fa-solid fa-wand-magic",
    title: "Editar imagen",
    description: "Generacion continua",
    component: <ImageTunningPage />,
  },

  {
    to: "/audio-to-text",
    icon: "fa-solid fa-comment-dots",
    title: "Audio a texto",
    description: "Convertir audio a texto",
    component: <AudioToTextPage />,
  },
  {
    to: "/assistant",
    icon: "fa-solid fa-user",
    title: "Assistente",
    description: "Informacion del asistente",
    component: <AssistantPage />,
  },
];

export const router =  createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children: [
      ...menuRoutes.map(route => ({
        path: route.to,
        element: route.component
      })),

      {
        path:"",
        element: <Navigate to={menuRoutes[0].to}/>
      }
    ],
  }
])