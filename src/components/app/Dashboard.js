import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, TreePine, Award, Calendar, MapPin, Phone, Plus, Target, Clock, Heart } from 'lucide-react';

// interface User {
//   name: string;
//   role: string;
//   province: string;
//   converts: number;
//   generations: number;
// }

// interface DashboardProps {
//   user: User;
// }

export const Dashboard = ({ user }) => {
  const recentConverts = [
    { name: 'Sister Grace Adamu', date: '2023-08-10', location: 'Lekki, Lagos', status: 'New' },
    { name: 'Brother Emmanuel Chukwu', date: '2023-05-22', location: 'Surulere, Lagos', status: 'In Class' },
    { name: 'Sister Rebecca Taiwo', date: '2023-02-14', location: 'Ikorodu, Lagos', status: 'Completed' },
    { name: 'Brother Peter Okafor', date: '2023-01-15', location: 'Victoria Island', status: 'Mentoring' },
  ];

  const milestones = [
    { title: 'First Convert', date: '2022-03-20', achieved: true },
    { title: '5 Converts Reached', date: '2023-01-15', achieved: true },
    { title: '10 Converts Reached', date: '2023-06-10', achieved: true },
    { title: '2nd Generation', date: '2023-01-15', achieved: true },
    { title: '3rd Generation', date: '2023-08-10', achieved: true },
    { title: '15 Converts Target', date: 'Pending', achieved: false },
  ];

  const upcomingTasks = [
    { task: 'Follow up with Sister Grace Adamu', due: '2023-08-15', priority: 'high' },
    { task: 'New Convert Class - Brother Emmanuel', due: '2023-08-16', priority: 'medium' },
    { task: 'Monthly Soul Winners Meeting', due: '2023-08-20', priority: 'medium' },
    { task: 'Quarterly Report Submission', due: '2023-08-25', priority: 'low' },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">Here is an overview of your soul-winning impact and recent activities.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Converts</p>
                <p className="text-2xl font-bold text-primary">{user.converts}</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="flex items-center mt-2 text-sm text-growth">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+3 this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-growth/5 to-growth/10 border-growth/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Generations</p>
                <p className="text-2xl font-bold text-growth">{user.generations}</p>
              </div>
              <TreePine className="w-8 h-8 text-growth" />
            </div>
            <div className="flex items-center mt-2 text-sm text-growth">
              <Target className="w-4 h-4 mr-1" />
              <span>Max depth reached</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sacred/10 to-sacred/5 border-sacred-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Converts</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </div>
              <Heart className="w-8 h-8 text-sacred-gold" />
            </div>
            <div className="flex items-center mt-2 text-sm text-primary">
              <Award className="w-4 h-4 mr-1" />
              <span>67% retention rate</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold text-foreground">3</p>
              </div>
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              <span>Last: 5 days ago</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Converts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Converts</span>
              <Button variant="outline" size="sm">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentConverts.map((convert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-divine rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">{convert.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{convert.name}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(convert.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {convert.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    convert.status === 'New' ? 'bg-blue-100 text-blue-800' :
                    convert.status === 'In Class' ? 'bg-yellow-100 text-yellow-800' :
                    convert.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {convert.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{task.task}</p>
                    <p className="text-sm text-muted-foreground">{task.due}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Milestones Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-primary" />
            <span>Soul-Winning Milestones</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                milestone.achieved 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-muted/30 border-border'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    milestone.achieved 
                      ? 'bg-green-500 text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {milestone.achieved ? (
                      <Award className="w-4 h-4" />
                    ) : (
                      <Target className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <p className={`font-medium ${
                      milestone.achieved ? 'text-green-800' : 'text-foreground'
                    }`}>
                      {milestone.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{milestone.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="divine" className="h-16 flex-col space-y-2">
              <Plus className="w-6 h-6" />
              <span>Register Convert</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <TreePine className="w-6 h-6" />
              <span>View Tree</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Users className="w-6 h-6" />
              <span>Contact Converts</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <TrendingUp className="w-6 h-6" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};