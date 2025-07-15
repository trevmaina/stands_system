import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Search, Mail, Phone, Edit } from 'lucide-react';

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  ministry: string;
  status: 'active' | 'inactive';
  skills: string[];
}

export default function VolunteersManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real implementation, this would come from database
  const mockVolunteers: Volunteer[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      ministry: 'Music Ministry',
      status: 'active',
      skills: ['Guitar', 'Vocals', 'Piano']
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(555) 987-6543',
      ministry: 'Children Ministry',
      status: 'active',
      skills: ['Teaching', 'Child Care', 'Event Planning']
    },
    {
      id: '3',
      name: 'Mike Davis',
      email: 'mike@example.com',
      phone: '(555) 555-5555',
      ministry: 'Technical Team',
      status: 'inactive',
      skills: ['Audio/Visual', 'IT Support', 'Live Streaming']
    }
  ];

  const filteredVolunteers = mockVolunteers.filter(volunteer =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.ministry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Volunteers Management</h1>
          <p className="text-muted-foreground">Manage volunteer database and assignments</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Volunteer
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search volunteers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredVolunteers.map((volunteer) => (
          <Card key={volunteer.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {volunteer.name}
                    <Badge variant={volunteer.status === 'active' ? 'default' : 'secondary'}>
                      {volunteer.status}
                    </Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{volunteer.ministry}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  {volunteer.email}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  {volunteer.phone}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {volunteer.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}