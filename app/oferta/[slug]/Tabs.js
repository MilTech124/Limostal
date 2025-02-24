"use client"
import {Tabs, Tab} from "@heroui/tabs";
import {Card,  CardBody} from "@heroui/card";
import Image from "next/image";

function TabsComponent({accessories}) {
  return (
    <div className="max-w-6xl mx-auto p-6 my-10 bg-gray-100 rounded-lg shadow-md">
<Tabs
  aria-label="Akcesoria"
  // isVertical={true}
  variant="solid"
  radius="none"
  color="primary"
  size="lg"
  classNames={{
    base: "flex flex-col md:flex-row", // Kolumna na mobilkach, rząd na desktopie
    tabList: "justify-center items-center md:gap-4",
    tab: "py-5 font-semibold text-black",    
    panel: "",
    tabContent: "text-black max-sm:text-xs",
  }}
>
      {accessories.map((accessory) => (
        <Tab key={accessory.key} title={accessory.title} >
          <Card className="flex gap-6">
            <CardBody className="md:w-2/3">
              <h2 className="md:text-2xl  font-bold mb-4">{accessory.title}</h2>
              <p className="text-gray-700 max-sm:text-xs">{accessory.description}</p>
            </CardBody>
            <div className="md:w-1/3 flex max-sm:flex-col gap-2">
              {accessory.image ? (
                <Image
                  src={accessory.image}
                  alt={accessory.title}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">Brak zdjęcia</span>
                </div>
              )}
              {accessory.image2 ? (
                <Image
                  src={accessory.image2}
                  alt={accessory.title}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">Brak zdjęcia</span>
                </div>
              )}

            </div>
          </Card>
        </Tab>
      ))}
    </Tabs>
  </div>
);
}

export default TabsComponent