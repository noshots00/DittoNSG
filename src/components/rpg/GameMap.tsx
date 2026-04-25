import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function GameMap() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Game Map</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            Game map coming soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}