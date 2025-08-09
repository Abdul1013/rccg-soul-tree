import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TreePine, Users, ChevronDown, ChevronRight, User, Calendar, MapPin, Phone } from 'lucide-react';

// interface Convert {
//   id: string;
//   name: string;
//   dateOfSalvation: string;
//   phone: string;
//   location: string;
//   converts: Convert[];
//   soulWinner: string;
//   generation: number;
// }

export const SoulWinningTree = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root']));
  
  // Sample tree data
  const treeData = {
    id: 'root',
    name: 'Pastor David Adeyemi',
    dateOfSalvation: '2010-01-15',
    phone: '+234 xxx xxx xxxx',
    location: 'Lagos, Nigeria',
    generation: 0,
    soulWinner: '',
    converts: [
      {
        id: '1',
        name: 'Sister Mary Johnson',
        dateOfSalvation: '2022-03-20',
        phone: '+234 xxx xxx xxxx',
        location: 'Ikeja, Lagos',
        generation: 1,
        soulWinner: 'Pastor David Adeyemi',
        converts: [
          {
            id: '1-1',
            name: 'Brother Peter Okafor',
            dateOfSalvation: '2023-01-15',
            phone: '+234 xxx xxx xxxx',
            location: 'Victoria Island, Lagos',
            generation: 2,
            soulWinner: 'Sister Mary Johnson',
            converts: [
              {
                id: '1-1-1',
                name: 'Sister Grace Adamu',
                dateOfSalvation: '2023-08-10',
                phone: '+234 xxx xxx xxxx',
                location: 'Lekki, Lagos',
                generation: 3,
                soulWinner: 'Brother Peter Okafor',
                converts: []
              }
            ]
          },
          {
            id: '1-2',
            name: 'Brother Emmanuel Chukwu',
            dateOfSalvation: '2023-05-22',
            phone: '+234 xxx xxx xxxx',
            location: 'Surulere, Lagos',
            generation: 2,
            soulWinner: 'Sister Mary Johnson',
            converts: []
          }
        ]
      },
      {
        id: '2',
        name: 'Brother Samuel Akinola',
        dateOfSalvation: '2022-07-18',
        phone: '+234 xxx xxx xxxx',
        location: 'Ikorodu, Lagos',
        generation: 1,
        soulWinner: 'Pastor David Adeyemi',
        converts: [
          {
            id: '2-1',
            name: 'Sister Rebecca Taiwo',
            dateOfSalvation: '2023-02-14',
            phone: '+234 xxx xxx xxxx',
            location: 'Ikorodu, Lagos',
            generation: 2,
            soulWinner: 'Brother Samuel Akinola',
            converts: []
          }
        ]
      },
      {
        id: '3',
        name: 'Sister Faith Ogbonna',
        dateOfSalvation: '2023-01-08',
        phone: '+234 xxx xxx xxxx',
        location: 'Ajah, Lagos',
        generation: 1,
        soulWinner: 'Pastor David Adeyemi',
        converts: []
      }
    ]
  };

  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const getGenerationColor = (generation) => {
    const colors = [
      'bg-gradient-divine',
      'bg-gradient-sacred', 
      'bg-gradient-growth',
      'bg-primary/80',
      'bg-growth/80'
    ];
    return colors[generation % colors.length] || 'bg-muted';
  };

  const getGenerationLabel = (generation) => {
    if (generation === 0) return 'Soul Winner';
    return `${generation}${generation === 1 ? 'st' : generation === 2 ? 'nd' : generation === 3 ? 'rd' : 'th'} Generation`;
  };

  const TreeNode = ({ convert, level = 0 }) => {
    const isExpanded = expandedNodes.has(convert.id);
    const hasChildren = convert.converts.length > 0;

    return (
      <div className="relative">
        {/* Connecting lines */}
        {level > 0 && (
          <>
            <div className="absolute -left-6 top-0 w-6 h-6 border-l-2 border-b-2 border-primary/30 rounded-bl-lg"></div>
            <div className="absolute -left-6 top-6 bottom-0 w-0.5 bg-primary/30"></div>
          </>
        )}

        <Card className={`mb-4 hover:shadow-divine transition-all duration-300 border-border/50 ${level > 0 ? 'ml-12' : ''}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {hasChildren && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleNode(convert.id)}
                    className="p-1 h-6 w-6"
                  >
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </Button>
                )}
                <div className={`w-10 h-10 ${getGenerationColor(convert.generation)} rounded-lg flex items-center justify-center`}>
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">{convert.name}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGenerationColor(convert.generation)} text-white`}>
                      {getGenerationLabel(convert.generation)}
                    </span>
                    {convert.soulWinner && (
                      <span>Led by: {convert.soulWinner}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-foreground">
                  {convert.converts.length} Convert{convert.converts.length !== 1 ? 's' : ''}
                </div>
                {hasChildren && (
                  <div className="text-xs text-muted-foreground">
                    {getTotalConverts(convert)} total in lineage
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Saved: {new Date(convert.dateOfSalvation).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{convert.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{convert.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Children nodes */}
        {hasChildren && isExpanded && (
          <div className="relative">
            {convert.converts.map((child, index) => (
              <TreeNode key={child.id} convert={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const getTotalConverts = (convert) => {
    let total = convert.converts.length;
    convert.converts.forEach(child => {
      total += getTotalConverts(child);
    });
    return total;
  };

  const getTreeStats = () => {
    const totalConverts = getTotalConverts(treeData);
    const maxGeneration = getMaxGeneration(treeData);
    const activeConvertors = getActiveConvertors(treeData);
    
    return { totalConverts, maxGeneration, activeConvertors };
  };

  const getMaxGeneration = (convert)=> {
    if (convert.converts.length === 0) return convert.generation;
    return Math.max(...convert.converts.map(child => getMaxGeneration(child)));
  };

  const getActiveConvertors = (convert) => {
    let count = convert.converts.length > 0 ? 1 : 0;
    convert.converts.forEach(child => {
      count += getActiveConvertors(child);
    });
    return count;
  };

  const stats = getTreeStats();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Soul-Winning Tree</h1>
        <p className="text-muted-foreground">Visualize your spiritual lineage and track the multiplication of souls.</p>
      </div>

      {/* Tree Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
          <CardContent className="p-4 text-center">
            <TreePine className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.totalConverts}</div>
            <div className="text-sm text-muted-foreground">Total Converts</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-growth/5 to-growth/10 border-growth/20">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-growth mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.maxGeneration}</div>
            <div className="text-sm text-muted-foreground">Max Generation</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-sacred/10 to-sacred/5 border-sacred-gold/20">
          <CardContent className="p-4 text-center">
            <User className="w-8 h-8 text-foreground mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.activeConvertors}</div>
            <div className="text-sm text-muted-foreground">Active Soul Winners</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">2.5</div>
            <div className="text-sm text-muted-foreground">Avg. Time to Convert</div>
          </CardContent>
        </Card>
      </div>

      {/* Tree Visualization */}
      <Card className="bg-white/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TreePine className="w-6 h-6 text-primary" />
            <span>Spiritual Family Tree</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4">
            <TreeNode convert={treeData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};