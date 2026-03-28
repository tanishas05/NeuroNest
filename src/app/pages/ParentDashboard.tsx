import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BarChart3, TrendingUp, AlertCircle, Lightbulb, Activity, Clock } from "lucide-react";
import { Progress } from "../components/ui/progress";

interface ActivityLog {
  id: string;
  module: string;
  activity: string;
  timestamp: Date;
  duration: number;
  performance: number;
}

export function ParentDashboard() {
  const [activityLogs] = useState<ActivityLog[]>([
    { id: "1", module: "Social Coach", activity: "Completed 3 scenarios", timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), duration: 15, performance: 85 },
    { id: "2", module: "Learning Engine", activity: "Solved 5 math problems", timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), duration: 20, performance: 80 },
    { id: "3", module: "Dyslexia Games", activity: "Word scramble practice", timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), duration: 12, performance: 90 },
  ]);

  const [stats] = useState({
    totalSessions: 12,
    averageSessionTime: 18,
    weeklyProgress: 75,
    favoriteModule: "Learning Engine",
    strongAreas: ["Visual Learning", "Pattern Recognition", "Creative Activities"],
    challengeAreas: ["Social Cues", "Reading Comprehension", "Time Management"],
  });

  const insights = [
    { type: "success", title: "Great Progress in Learning!", message: "Your child has completed 80% of math problems correctly this week. Consider introducing slightly harder problems.", icon: TrendingUp, color: "green" },
    { type: "info", title: "Social Practice Needed", message: "It's been 2 days since the last Social Coach session. Regular practice helps build confidence.", icon: AlertCircle, color: "blue" },
    { type: "tip", title: "Reading Improvement Tip", message: "Your child shows strong progress in phonetic matching. Try combining this with longer reading passages.", icon: Lightbulb, color: "yellow" },
  ];

  const communicationStrategies = [
    { strategy: "Visual Schedules", description: "Use visual timers and schedules to help with transitions and time management.", impact: "High" },
    { strategy: "Clear Instructions", description: "Break down instructions into smaller steps. Use 'First, then, finally' structure.", impact: "High" },
    { strategy: "Positive Reinforcement", description: "Celebrate small wins and progress. Focus on effort rather than just outcomes.", impact: "Medium" },
    { strategy: "Sensory Breaks", description: "Allow for movement breaks every 20-30 minutes during learning activities.", impact: "Medium" },
  ];

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Parent Dashboard</h1>
          <p className="text-gray-600">Track progress and get insights</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Sessions</span>
            <Activity className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.totalSessions}</p>
          <p className="text-xs text-green-600 mt-1">+3 this week</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Avg. Session</span>
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.averageSessionTime}m</p>
          <p className="text-xs text-gray-500 mt-1">Per session</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Weekly Progress</span>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.weeklyProgress}%</p>
          <Progress value={stats.weeklyProgress} className="mt-2" />
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Favorite Module</span>
            <Lightbulb className="w-4 h-4 text-yellow-600" />
          </div>
          <p className="text-lg font-bold text-gray-800">{stats.favoriteModule}</p>
          <p className="text-xs text-gray-500 mt-1">Most engaged</p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="insights" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
          <TabsTrigger value="strategies">Strategies</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
        </TabsList>

        {/* Insights Tab */}
        <TabsContent value="insights">
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              const colors = { green: "from-green-500 to-emerald-500", blue: "from-blue-500 to-cyan-500", yellow: "from-yellow-500 to-orange-500" };
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[insight.color as keyof typeof colors]} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{insight.title}</h3>
                      <p className="text-gray-600">{insight.message}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Activity Log Tab */}
        <TabsContent value="activity">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {activityLogs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">{log.module}</Badge>
                      <span className="text-xs text-gray-500">{formatTimeAgo(log.timestamp)}</span>
                    </div>
                    <p className="text-gray-800 font-medium">{log.activity}</p>
                    <p className="text-sm text-gray-600">Duration: {log.duration} minutes</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">{log.performance}%</div>
                    <p className="text-xs text-gray-500">Performance</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Communication Strategies Tab */}
        <TabsContent value="strategies">
          <div className="grid md:grid-cols-2 gap-4">
            {communicationStrategies.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-800">{item.strategy}</h3>
                  <Badge className={item.impact === "High" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                    {item.impact} Impact
                  </Badge>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Strong Areas */}
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-800">
                <TrendingUp className="w-5 h-5" /> Strong Areas
              </h3>
              <div className="space-y-3">
                {stats.strongAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Challenge Areas */}
            <Card className="p-6 bg-orange-50 border-orange-200">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-orange-800">
                <AlertCircle className="w-5 h-5" /> Areas for Growth
              </h3>
              <div className="space-y-3">
                {stats.challengeAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}