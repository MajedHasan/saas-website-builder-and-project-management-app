import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EditorBtns } from "@/lib/constants";
import React from "react";
import TextPlaceholder from "./text-placeholder";
import ContainerPlaceholder from "./container-placeholder";
import VideoPlaceholder from "./video-placeholder";
import TwoColumnsPlaceholder from "./two-columns-placeholder";
import LinkPlaceholder from "./link-placeholder";
import ContactFormComponentPlaceholder from "./contact-form-placeholder";
import CheckoutPlaceholder from "./checkout-placeholder";
import ImagePlaceholder from "./image-placeholder";
import ButtonPlaceholder from "./button-placeholder";
import ThreeColumnsPlaceholder from "./three-columns-placeholder";

type Props = {};

const ComponentsTab = (props: Props) => {
  const elements: {
    Component: React.ReactNode;
    label: string;
    id: EditorBtns;
    group: "layout" | "elements" | "templates";
  }[] = [
    {
      Component: <TextPlaceholder />,
      label: "Text",
      id: "text",
      group: "elements",
    },
    {
      Component: <ContainerPlaceholder />,
      label: "Container",
      id: "container",
      group: "layout",
    },
    {
      Component: <TwoColumnsPlaceholder />,
      label: "2 Columns",
      id: "2Col",
      group: "layout",
    },
    {
      Component: <ThreeColumnsPlaceholder />,
      label: "3 Columns",
      id: "3Col",
      group: "layout",
    },
    {
      Component: <VideoPlaceholder />,
      label: "Video",
      id: "video",
      group: "elements",
    },
    {
      Component: <ContactFormComponentPlaceholder />,
      label: "Contact",
      id: "contactForm",
      group: "elements",
    },
    {
      Component: <CheckoutPlaceholder />,
      label: "Checkout",
      id: "paymentForm",
      group: "elements",
    },
    {
      Component: <LinkPlaceholder />,
      label: "Link",
      id: "link",
      group: "elements",
    },
    {
      Component: <ImagePlaceholder />,
      label: "Image",
      id: "image",
      group: "elements",
    },
    {
      Component: <ButtonPlaceholder />,
      label: "Button",
      id: "button",
      group: "elements",
    },
    {
      Component: <ButtonPlaceholder />,
      label: "Image Box",
      id: "imageBox",
      group: "templates",
    },
    {
      Component: <ButtonPlaceholder />,
      label: "Pricing Box",
      id: "pricingBox",
      group: "templates",
    },
    {
      Component: <ButtonPlaceholder />,
      label: "Call To Action",
      id: "callToAction",
      group: "templates",
    },
    {
      Component: <ButtonPlaceholder />,
      label: "Flip Box",
      id: "flipBox",
      group: "templates",
    },
    {
      Component: <ButtonPlaceholder />,
      label: "Review Box",
      id: "reviewBox",
      group: "templates",
    },
  ];

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={["Layout", "Elements", "Templates"]}
    >
      <AccordionItem value="Layout" className="px-6 py-0 border-y-[1px]">
        <AccordionTrigger className="!no-underline">Layout</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter((element) => element.group === "layout")
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Elements" className="px-6 py-0 ">
        <AccordionTrigger className="!no-underline">Elements</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter((element) => element.group === "elements")
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Templates" className="px-6 py-0 ">
        <AccordionTrigger className="!no-underline">Templates</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter((element) => element.group === "templates")
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ComponentsTab;
