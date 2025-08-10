"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TreePine, Users, Plus, TrendingUp, User, Settings } from 'lucide-react';
import { ConvertRegistration } from '@/components/app/ConvertRegistration';
import { SoulWinningTree } from '@/components/app/SoulWinningTree';
import { Dashboard } from '@/components/app/Dashboard';
import { ProfileManagement } from '@/components/app/ProfileManagement';
import { AdminPanel } from '@/components/app/AdminPanel';

export default function Home() {
 const [activeView, setActiveView] = useState('dashboard');
  const [user] = useState({
    name: 'Pastor David Adeyemi',
    role: 'Provincial Pastor',
    province: 'Lagos Province',
    converts: 12,
    generations: 3
  });

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'register', label: 'Register Convert', icon: Plus },
    { id: 'tree', label: 'Soul-Winning Tree', icon: TreePine },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'admin', label: 'Admin Panel', icon: Settings },
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case 'register':
        return <ConvertRegistration />;
      case 'tree':
        return <SoulWinningTree />;
      case 'profile':
        return <ProfileManagement user={user} />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-heavenly">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className=" mx-auto px-4 py-4">
          <div className="flex text-black items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-divine rounded-lg flex items-center justify-center">
                <TreePine className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl text-black font-bold ">Soul Tree Nexus</h1>
                <p className="text-xs text-muted-foreground">RCCG Convert Tracking System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-black">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
              <div className="w-10 h-10 bg-gradient-sacred rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-yellow" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        {/* Sidebar Navigation */}
<aside className="w-16 sm:w-64 bg-white/70 backdrop-blur-sm border-r border-border/50 min-h-screen transition-all duration-300">
  <div className="p-2 sm:p-6">
    <nav className="space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveView(item.id)}
          className={`w-full flex flex-col sm:flex-row items-center sm:space-x-3 px-2 sm:px-4 py-3 rounded-lg transition-all duration-200 ${
            activeView === item.id
              ? 'bg-gradient-divine text-white shadow-divine'
              : 'text-foreground hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <item.icon className="w-6 h-6" />
          <span className="font-medium text-xs sm:text-base hidden sm:inline">
            {item.label}
          </span>
        </button>
      ))}
    </nav>

    {/* Quick Stats */}
    <Card className="mt-8 hidden sm:block bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold text-foreground">Your Impact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Converts</span>
          <span className="text-lg font-bold text-primary">{user.converts}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Generations</span>
          <span className="text-lg font-bold text-growth">{user.generations}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Province</span>
          <span className="text-xs font-medium text-foreground">{user.province}</span>
        </div>
      </CardContent>
    </Card>
  </div>
</aside>


        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};