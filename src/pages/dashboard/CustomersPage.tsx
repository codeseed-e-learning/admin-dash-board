
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <p className="text-muted-foreground mt-2">
          Manage your customer database
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a placeholder for the customers management page. In a complete application, 
            you would see a list of customers with actions like add, edit, and delete.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomersPage;
