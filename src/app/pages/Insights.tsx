import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Lightbulb, 
  TrendingUp, 
  AlertCircle, 
  Calendar,
  Clock,
  Target,
  Brain,
  Heart
} from "lucide-react";

export function Insights() {
  const weeklyInsights = [
    {
      week: "This Week",
      date: "March 21 - 27, 2026",
      highlights: [
        {
          type: "success",
          title: "Great Progress in Math!",
          description: "Your child solved 15 math problems with 87% accuracy. They're particularly strong with addition and subtraction.",
          metric: "87%",
          icon: TrendingUp
        },
        {
          type: "improvement",
          title: "Social Skills Practice Needed",
          description: "It's been 3 days since the last Social Coach session. Regular practice helps maintain confidence.",
          metric: "3 days",
          icon: Calendar
        },
        {
          type: "tip",
          title: "Reading Time Increased",
          description: "Average reading session length increased from 8 to 12 minutes. This shows growing attention span!",
          metric: "+50%",
          icon: Clock
        }
      ]
    }
  ];

  const behavioralPatterns = [
    {
      pattern: "Best Learning Time",
      observation: "Your child is most engaged between 10 AM - 12 PM",
      recommendation: "Schedule challenging activities during this window for optimal results",
      confidence: "High"
    },
    {
      pattern: "Interest-Based Engagement",
      observation: "Sessions with 'Cars' theme show 40% higher completion rate",
      recommendation: "Continue leveraging car-related content across different subjects",
      confidence: "High"
    },
    {
      pattern: "Break Patterns",
      observation: "Focus starts to decline after 15-20 minutes of continuous activity",
      recommendation: "Build in 5-minute breaks every 15 minutes during learning sessions",
      confidence: "Medium"
    },
    {
      pattern: "Social Scenario Preference",
      observation: "Home and Friends scenarios are completed more than School scenarios",
      recommendation: "Gradually introduce more School scenarios to build comfort",
      confidence: "Medium"
    }
  ];

  const actionableSteps = [
    {
      category: "Daily Routine",
      steps: [
        "Morning: 15-min Social Coach session before school",
        "After School: 20-min interest-based learning (Cars theme)",
        "Evening: 10-min reading practice with dyslexia support tools"
      ],
      icon: Calendar
    },
    {
      category: "Communication Strategies",
      steps: [
        "Use visual schedules to prepare for transitions",
        "Break instructions into 2-3 step chunks",
        "Allow processing time - count to 5 before repeating",
        "Celebrate effort, not just outcomes"
      ],
      icon: Brain
    },
    {
      category: "Emotional Support",
      steps: [
        "Create a 'calm corner' with sensory items",
        "Validate feelings before problem-solving",
        "Use 'emotion cards' to help identify feelings",
        "Practice deep breathing together daily"
      ],
      icon: Heart
    }
  ];

  const upcomingGoals = [
    {
      goal: "Complete 5 School-based social scenarios",
      progress: 40,
      deadline: "End of this week",
      status: "on-track"
    },
    {
      goal: "Maintain 80%+ accuracy in math problems",
      progress: 87,
      deadline: "Ongoing",
      status: "exceeding"
    },
    {
      goal: "Read 3 stories with visual tracking",
      progress: 66,
      deadline: "This week",
      status: "on-track"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Insights & Guidance</h1>
            <p className="text-gray-600">Deep dive into patterns and actionable recommendations</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="actions">Action Plan</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        {/* Weekly Insights */}
        <TabsContent value="weekly">
          {weeklyInsights.map((week, idx) => (
            <div key={idx}>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800">{week.week}</h3>
                <p className="text-sm text-gray-600">{week.date}</p>
              </div>

              <div className="space-y-4">
                {week.highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  const colors = {
                    success: { bg: "from-green-500 to-emerald-500", card: "bg-green-50 border-green-200" },
                    improvement: { bg: "from-blue-500 to-cyan-500", card: "bg-blue-50 border-blue-200" },
                    tip: { bg: "from-yellow-500 to-orange-500", card: "bg-yellow-50 border-yellow-200" }
                  };
                  const color = colors[highlight.type as keyof typeof colors];

                  return (
                    <Card key={index} className={`p-6 ${color.card}`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color.bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-lg text-gray-800">{highlight.title}</h3>
                            <Badge variant="outline" className="ml-2">{highlight.metric}</Badge>
                          </div>
                          <p className="text-gray-700">{highlight.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Behavioral Patterns */}
        <TabsContent value="patterns">
          <div className="space-y-4">
            {behavioralPatterns.map((pattern, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-800">{pattern.pattern}</h3>
                  <Badge className={
                    pattern.confidence === "High" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-blue-100 text-blue-700"
                  }>
                    {pattern.confidence} Confidence
                  </Badge>
                </div>
                
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-600 mb-1">Observation:</h4>
                  <p className="text-gray-800">{pattern.observation}</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="text-sm font-medium text-purple-700 mb-1 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Recommendation:
                  </h4>
                  <p className="text-gray-800">{pattern.recommendation}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Action Plan */}
        <TabsContent value="actions">
          <div className="space-y-6">
            {actionableSteps.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800">{category.category}</h3>
                  </div>

                  <div className="space-y-2">
                    {category.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                          {idx + 1}
                        </div>
                        <p className="text-gray-700 flex-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Goals Tracking */}
        <TabsContent value="goals">
          <div className="space-y-4">
            {upcomingGoals.map((goal, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{goal.goal}</h3>
                    <p className="text-sm text-gray-600">Deadline: {goal.deadline}</p>
                  </div>
                  <Badge className={
                    goal.status === "exceeding" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-blue-100 text-blue-700"
                  }>
                    {goal.status === "exceeding" ? "Exceeding!" : "On Track"}
                  </Badge>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-800">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        goal.progress >= 80 ? "bg-green-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Setting Effective Goals
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Specific:</strong> Make goals clear and concrete</li>
                <li>• <strong>Achievable:</strong> Set goals that challenge but don't overwhelm</li>
                <li>• <strong>Time-bound:</strong> Create deadlines to maintain momentum</li>
                <li>• <strong>Celebrate:</strong> Acknowledge progress, not just completion</li>
              </ul>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
