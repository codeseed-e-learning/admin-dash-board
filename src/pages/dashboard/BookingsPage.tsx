
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Bookings</h2>
        <p className="text-muted-foreground mt-2">
          Manage all your bookings and reservations
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Booking Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a placeholder for the bookings management page. In a complete application, 
            you would see a list of bookings with actions like add, edit, and delete.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingsPage;
