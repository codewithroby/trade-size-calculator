import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Forex } from "@/components/calculator/forex";
import { Crypto } from "@/components/calculator/crypto";

export const Calculator = () => (
  <div className="rounded-md bg-white shadow-sm">
    <Tabs defaultValue="forex" className="relative w-full">
      <div className="border-b border-slate-100 p-6">
        <TabsList className="w-full">
          <TabsTrigger value="forex" className="flex-1 uppercase">
            Forex
          </TabsTrigger>
          <TabsTrigger value="crypto" className="flex-1 uppercase">
            Crypto
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="forex" className="mt-0 pt-0">
        <Forex />
      </TabsContent>
      <TabsContent value="crypto" className="mt-0 pt-0">
        <Crypto />
      </TabsContent>
    </Tabs>
  </div>
);
