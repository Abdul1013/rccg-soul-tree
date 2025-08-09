import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, User, Phone, Mail, Church, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ConvertRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfSalvation: '',
    ageGroup: '',
    gender: '',
    address: '',
    churchUnit: '',
    province: '',
    referredBy: '',
    soulWinner: '',
    specialNeeds: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Convert Registered Successfully!",
      description: `${formData.fullName} has been added to the soul-winning network.`,
    });
    // Reset form
    setFormData({
      fullName: '', email: '', phone: '', dateOfSalvation: '', ageGroup: '', 
      gender: '', address: '', churchUnit: '', province: '', referredBy: '', 
      soulWinner: '', specialNeeds: '', notes: ''
    });
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Register New Convert</h1>
        <p className="text-muted-foreground">Welcome a new soul to the Kingdom and integrate them into our tracking system.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>Personal Information</span>
              </CardTitle>
              <CardDescription>Basic details of the new convert</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="+234 xxx xxx xxxx"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => updateFormData('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="ageGroup">Age Group</Label>
                  <Select value={formData.ageGroup} onValueChange={(value) => updateFormData('ageGroup', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="child">Child (0-12)</SelectItem>
                      <SelectItem value="teenager">Teenager (13-19)</SelectItem>
                      <SelectItem value="youth">Youth (20-35)</SelectItem>
                      <SelectItem value="adult">Adult (36-55)</SelectItem>
                      <SelectItem value="senior">Senior (55+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData('address', e.target.value)}
                  placeholder="Enter residential address"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Spiritual Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Spiritual Information</span>
              </CardTitle>
              <CardDescription>Details about their salvation and church integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="dateOfSalvation">Date of Salvation *</Label>
                <Input
                  id="dateOfSalvation"
                  type="date"
                  value={formData.dateOfSalvation}
                  onChange={(e) => updateFormData('dateOfSalvation', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="soulWinner">Soul Winner *</Label>
                <Input
                  id="soulWinner"
                  value={formData.soulWinner}
                  onChange={(e) => updateFormData('soulWinner', e.target.value)}
                  placeholder="Who led them to Christ?"
                  required
                />
              </div>

              <div>
                <Label htmlFor="referredBy">Referred By</Label>
                <Input
                  id="referredBy"
                  value={formData.referredBy}
                  onChange={(e) => updateFormData('referredBy', e.target.value)}
                  placeholder="How did they hear about the church?"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="province">Province</Label>
                  <Select value={formData.province} onValueChange={(value) => updateFormData('province', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos Province</SelectItem>
                      <SelectItem value="abuja">Abuja Province</SelectItem>
                      <SelectItem value="ibadan">Ibadan Province</SelectItem>
                      <SelectItem value="kaduna">Kaduna Province</SelectItem>
                      <SelectItem value="port-harcourt">Port Harcourt Province</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="churchUnit">Church Unit</Label>
                  <Input
                    id="churchUnit"
                    value={formData.churchUnit}
                    onChange={(e) => updateFormData('churchUnit', e.target.value)}
                    placeholder="e.g., Zone 5, Parish 2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="specialNeeds">Special Needs/Prayer Requests</Label>
                <Textarea
                  id="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={(e) => updateFormData('specialNeeds', e.target.value)}
                  placeholder="Any special needs or prayer requests"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => updateFormData('notes', e.target.value)}
                  placeholder="Any additional information"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit" variant="divine" className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Register Convert</span>
          </Button>
        </div>
      </form>
    </div>
  );
};