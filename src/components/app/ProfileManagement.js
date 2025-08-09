import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Church,
  Calendar,
  Award,
  Save,
  Camera,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// interface User {
//   name: string;
//   role: string;
//   province: string;
//   converts: number;
//   generations: number;
// }

// interface ProfileManagementProps {
//   user: User;
// }

export const ProfileManagement = ({ user }) => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    fullName: user.name,
    email: "david.adeyemi@rccg.org",
    phone: "+234 803 123 4567",
    role: user.role,
    province: user.province,
    parish: "Jesus House Parish",
    zone: "Zone 5",
    dateJoined: "2010-01-15",
    bio: "Passionate about soul winning and discipleship. Committed to raising spiritual sons and daughters in the faith.",
    specialization: "Youth Ministry",
    address: "123 Church Street, Ikeja, Lagos",
    emergencyContact: "+234 803 987 6543",
    preferredLanguage: "english",
    notifications: {
      email: true,
      sms: true,
      push: true,
    },
  });

  const handleSave = () => {
    toast({
      title: "Profile Updated Successfully!",
      description: "Your profile information has been saved.",
    });
  };

  const updateField = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setProfileData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent] || {}),
          [child]: value,
        },
      }));
    } else {
      setProfileData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const achievements = [
    { title: "Soul Winner of the Month", date: "July 2023", icon: Award },
    { title: "10+ Converts Milestone", date: "June 2023", icon: User },
    { title: "3rd Generation Reached", date: "August 2023", icon: Award },
    { title: "Mentor Excellence Award", date: "May 2023", icon: Award },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and soul-winning preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture & Quick Stats */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Change
                </Button>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {profileData.fullName}
              </h3>
              <p className="text-muted-foreground">{profileData.role}</p>
              <p className="text-sm text-muted-foreground">
                {profileData.province}
              </p>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Soul-Winning Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Converts</span>
                <span className="text-2xl font-bold text-primary">
                  {user.converts}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Generations</span>
                <span className="text-2xl font-bold text-growth">
                  {user.generations}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Years Active</span>
                <span className="text-2xl font-bold text-sacred-gold">13</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 bg-muted/30 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-gradient-sacred rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {achievement.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={profileData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  <Input
                    id="emergencyContact"
                    value={profileData.emergencyContact}
                    onChange={(e) =>
                      updateField("emergencyContact", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={profileData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => updateField("bio", e.target.value)}
                  rows={3}
                  placeholder="Tell us about your ministry and passion for soul winning..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Ministry Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Church className="w-5 h-5 text-primary" />
                <span>Ministry Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="role">Role/Position</Label>
                  <Select
                    value={profileData.role}
                    onValueChange={(value) => updateField("role", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Provincial Pastor">
                        Provincial Pastor
                      </SelectItem>
                      <SelectItem value="Zonal Pastor">Zonal Pastor</SelectItem>
                      <SelectItem value="Parish Pastor">
                        Parish Pastor
                      </SelectItem>
                      <SelectItem value="Assistant Pastor">
                        Assistant Pastor
                      </SelectItem>
                      <SelectItem value="Worker">Worker</SelectItem>
                      <SelectItem value="Member">Member</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="specialization">
                    Ministry Specialization
                  </Label>
                  <Select
                    value={profileData.specialization}
                    onValueChange={(value) =>
                      updateField("specialization", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Youth Ministry">
                        Youth Ministry
                      </SelectItem>
                      <SelectItem value="Children Ministry">
                        Children Ministry
                      </SelectItem>
                      <SelectItem value="Women Ministry">
                        Women Ministry
                      </SelectItem>
                      <SelectItem value="Men Ministry">Men Ministry</SelectItem>
                      <SelectItem value="Evangelism">Evangelism</SelectItem>
                      <SelectItem value="Discipleship">Discipleship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="province">Province</Label>
                  <Select
                    value={profileData.province}
                    onValueChange={(value) => updateField("province", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Lagos Province">
                        Lagos Province
                      </SelectItem>
                      <SelectItem value="Abuja Province">
                        Abuja Province
                      </SelectItem>
                      <SelectItem value="Ibadan Province">
                        Ibadan Province
                      </SelectItem>
                      <SelectItem value="Kaduna Province">
                        Kaduna Province
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="parish">Parish</Label>
                  <Input
                    id="parish"
                    value={profileData.parish}
                    onChange={(e) => updateField("parish", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="zone">Zone</Label>
                  <Input
                    id="zone"
                    value={profileData.zone}
                    onChange={(e) => updateField("zone", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="dateJoined">Date Joined Ministry</Label>
                <Input
                  id="dateJoined"
                  type="date"
                  value={profileData.dateJoined}
                  onChange={(e) => updateField("dateJoined", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Preferences & Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="language">Preferred Language</Label>
                <Select
                  value={profileData.preferredLanguage}
                  onValueChange={(value) =>
                    updateField("preferredLanguage", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="yoruba">Yoruba</SelectItem>
                    <SelectItem value="hausa">Hausa</SelectItem>
                    <SelectItem value="igbo">Igbo</SelectItem>
                    <SelectItem value="pidgin">Pidgin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Notification Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">
                      Email Notifications
                    </span>
                    <Button
                      variant={
                        profileData.notifications.email ? "divine" : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        updateField(
                          "notifications.email",
                          !profileData.notifications.email
                        )
                      }
                    >
                      {profileData.notifications.email ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">
                      SMS Notifications
                    </span>
                    <Button
                      variant={
                        profileData.notifications.sms ? "divine" : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        updateField(
                          "notifications.sms",
                          !profileData.notifications.sms
                        )
                      }
                    >
                      {profileData.notifications.sms ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">
                      Push Notifications
                    </span>
                    <Button
                      variant={
                        profileData.notifications.push ? "divine" : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        updateField(
                          "notifications.push",
                          !profileData.notifications.push
                        )
                      }
                    >
                      {profileData.notifications.push ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              variant="divine"
              className="flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
