import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Calculator = () => (
  <div className="rounded-md bg-white px-6 py-4 shadow-sm">
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account" className="uppercase">
          Forex
        </TabsTrigger>
        <TabsTrigger value="password" className="uppercase">
          Crypto
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  </div>
);
