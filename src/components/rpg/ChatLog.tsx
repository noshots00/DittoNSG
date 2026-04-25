import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ChatLog() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            Chat system coming soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}