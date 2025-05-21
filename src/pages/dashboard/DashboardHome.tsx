
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, DollarSign, Users } from "lucide-react";

const DashboardHome = () => {
  // Mock data for the dashboard
  const stats = [
    {
      title: "Total Bookings",
      value: "485",
      change: "+12%",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Active Customers",
      value: "2,478",
      change: "+5.2%",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Registered Vendors",
      value: "124",
      change: "+3.1%",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Total Revenue",
      value: "$24,578",
      change: "+18.5%",
      icon: <DollarSign className="h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Welcome to your admin dashboard!
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="p-2 bg-primary/10 rounded-full text-primary">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Activities from the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">
                      New booking #{10000 + i} was created
                    </p>
                    <p className="text-xs text-muted-foreground">{i} hour{i > 1 ? 's' : ''} ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>Room Availability</CardTitle>
            <CardDescription>Current room status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Total Rooms</span>
                <span className="font-medium">50</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Available Rooms</span>
                <span className="font-medium text-green-600">32</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Occupied Rooms</span>
                <span className="font-medium text-amber-600">18</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Under Maintenance</span>
                <span className="font-medium text-red-600">2</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
