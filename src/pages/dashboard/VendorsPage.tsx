
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VendorsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Vendors</h2>
        <p className="text-muted-foreground mt-2">
          Manage all your vendors in one place
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vendor Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a placeholder for the vendors management page. In a complete application, 
            you would see a list of vendors with actions like add, edit, and delete.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorsPage;
