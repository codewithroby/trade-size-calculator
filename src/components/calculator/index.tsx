import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Calculator = () => (
  <div className="rounded-md bg-white p-6 shadow-sm">
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="forex" className="flex-1 uppercase">
          Forex
        </TabsTrigger>
        <TabsTrigger value="crypto" className="flex-1 uppercase">
          Crypto
        </TabsTrigger>
      </TabsList>
      <TabsContent value="forex">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="crypto">Change your password here.</TabsContent>
    </Tabs>
  </div>
);
