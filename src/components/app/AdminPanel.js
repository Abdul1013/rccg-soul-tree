import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, Users, TreePine, TrendingUp, Search, Filter, 
  Eye, Edit, Trash2, CheckCircle, Clock, AlertCircle,
  BarChart3, Globe, UserCheck, UserX, Download, Save
} from 'lucide-react';

export const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProvince, setFilterProvince] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data
  const stats = {
    totalConverts: 1247,
    pendingApprovals: 23,
    activeRegions: 15,
    thisMonth: 89,
    completedClasses: 892,
    inProgress: 234,
    newRegistrations: 121
  };

  const recentRegistrations = [
    { 
      id: '1', 
      name: 'Sister Grace Adamu', 
      soulWinner: 'Brother Peter Okafor', 
      province: 'Lagos Province', 
      date: '2023-08-10', 
      status: 'pending' 
    },
    { 
      id: '2', 
      name: 'Brother Emmanuel Chukwu', 
      soulWinner: 'Sister Mary Johnson', 
      province: 'Lagos Province', 
      date: '2023-08-09', 
      status: 'approved' 
    },
    { 
      id: '3', 
      name: 'Sister Rebecca Taiwo', 
      soulWinner: 'Brother Samuel Akinola', 
      province: 'Abuja Province', 
      date: '2023-08-08', 
      status: 'pending' 
    },
    { 
      id: '4', 
      name: 'Brother David Okoro', 
      soulWinner: 'Pastor John Adeyemi', 
      province: 'Ibadan Province', 
      date: '2023-08-07', 
      status: 'approved' 
    },
  ];

  const topSoulWinners = [
    { name: 'Pastor David Adeyemi', province: 'Lagos Province', converts: 12, generations: 3 },
    { name: 'Sister Mary Johnson', province: 'Lagos Province', converts: 8, generations: 2 },
    { name: 'Brother Samuel Akinola', province: 'Abuja Province', converts: 6, generations: 2 },
    { name: 'Pastor John Adeyemi', province: 'Ibadan Province', converts: 5, generations: 1 },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const filteredRegistrations = recentRegistrations.filter(reg => {
    const matchesSearch = reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.soulWinner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = filterProvince === 'all' || reg.province === filterProvince;
    const matchesStatus = filterStatus === 'all' || reg.status === filterStatus;
    
    return matchesSearch && matchesProvince && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive oversight and management of the soul-winning network.</p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Converts</p>
                <p className="text-2xl font-bold text-primary">{stats.totalConverts.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="flex items-center mt-2 text-sm text-growth">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+{stats.thisMonth} this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Approvals</p>
                <p className="text-2xl font-bold text-yellow-700">{stats.pendingApprovals}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="flex items-center mt-2 text-sm text-yellow-600">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span>Requires attention</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-growth/5 to-growth/10 border-growth/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Regions</p>
                <p className="text-2xl font-bold text-growth">{stats.activeRegions}</p>
              </div>
              <Globe className="w-8 h-8 text-growth" />
            </div>
            <div className="flex items-center mt-2 text-sm text-growth">
              <TreePine className="w-4 h-4 mr-1" />
              <span>Global coverage</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sacred/10 to-sacred/5 border-sacred-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Classes</p>
                <p className="text-2xl font-bold text-foreground">{stats.completedClasses}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-sacred-gold" />
            </div>
            <div className="flex items-center mt-2 text-sm text-sacred-gold">
              <UserCheck className="w-4 h-4 mr-1" />
              <span>{stats.inProgress} in progress</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Tabs */}
      <Tabs defaultValue="registrations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="registrations">Registrations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="soul-winners">Soul Winners</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Registrations Tab */}
        <TabsContent value="registrations" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Registrations</CardTitle>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="divine" size="sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Bulk Approve
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search converts or soul winners..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="province">Province</Label>
                  <Select value={filterProvince} onValueChange={setFilterProvince}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Provinces</SelectItem>
                      <SelectItem value="Lagos Province">Lagos Province</SelectItem>
                      <SelectItem value="Abuja Province">Abuja Province</SelectItem>
                      <SelectItem value="Ibadan Province">Ibadan Province</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    <Filter className="w-4 h-4 mr-2" />
                    Advanced Filters
                  </Button>
                </div>
              </div>

              {/* Registration Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Convert Name</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Soul Winner</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Province</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 px-4 font-medium text-foreground">{registration.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{registration.soulWinner}</td>
                        <td className="py-3 px-4 text-muted-foreground">{registration.province}</td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {new Date(registration.date).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">{getStatusBadge(registration.status)}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            {registration.status === 'pending' && (
                              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Monthly Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would go here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TreePine className="w-5 h-5 text-growth" />
                  <span>Generation Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">1st Generation</span>
                    <span className="font-bold text-primary">423</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">2nd Generation</span>
                    <span className="font-bold text-growth">287</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">3rd Generation</span>
                    <span className="font-bold text-sacred-gold">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">4th+ Generation</span>
                    <span className="font-bold text-foreground">93</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Soul Winners Tab */}
        <TabsContent value="soul-winners" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Soul Winners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSoulWinners.map((winner, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-gradient-divine' : 
                        index === 1 ? 'bg-gradient-sacred' : 
                        'bg-gradient-growth'
                      }`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{winner.name}</p>
                        <p className="text-sm text-muted-foreground">{winner.province}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{winner.converts} converts</p>
                      <p className="text-sm text-muted-foreground">{winner.generations} generations</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-primary" />
                <span>System Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="autoApproval">Auto-Approval Settings</Label>
                  <Select defaultValue="manual">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Manual Review Required</SelectItem>
                      <SelectItem value="auto">Auto-Approve All</SelectItem>
                      <SelectItem value="trusted">Auto-Approve Trusted Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="notificationFreq">Notification Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button variant="divine">
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};