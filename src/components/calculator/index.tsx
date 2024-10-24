import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Forex } from "@/components/calculator/forex";
import { Crypto } from "@/components/calculator/crypto";

export const Calculator = () => (
  <div className="rounded-md bg-white p-6 shadow-sm">
    <Tabs defaultValue="forex" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="forex" className="flex-1 uppercase">
          Forex
        </TabsTrigger>
        <TabsTrigger value="crypto" className="flex-1 uppercase">
          Crypto
        </TabsTrigger>
      </TabsList>
      <TabsContent value="forex">
        <Forex />
      </TabsContent>
      <TabsContent value="crypto">
        <Crypto />
      </TabsContent>
    </Tabs>
  </div>
);
