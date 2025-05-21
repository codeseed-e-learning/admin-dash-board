
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RoomsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Rooms</h2>
        <p className="text-muted-foreground mt-2">
          Manage all your rooms and facilities
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Room Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a placeholder for the rooms management page. In a complete application, 
            you would see a list of rooms with actions like add, edit, and delete.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomsPage;
