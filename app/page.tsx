"use client"

import { useState } from "react"
import {
  Battery,
  Zap,
  Shield,
  TrendingUp,
  DollarSign,
  Plus,
  Settings,
  Bell,
  Menu,
  ChevronRight,
  Target,
  Calendar,
  PieChart,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function FinancialBatteryApp() {
  const [batteryLevel, setBatteryLevel] = useState(75)
  const [safeToSpend, setSafeToSpend] = useState(280)
  const [weeklyAverage, setWeeklyAverage] = useState(280)
  const [thisWeekEarnings, setThisWeekEarnings] = useState(400)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const upcomingBills = [
    { name: "Rent", amount: 850, dueDate: "Jan 31", daysLeft: 5, protected: true, category: "Housing" },
    { name: "Phone", amount: 45, dueDate: "Feb 5", daysLeft: 10, protected: true, category: "Utilities" },
    { name: "Groceries Budget", amount: 120, dueDate: "Weekly", daysLeft: 2, protected: false, category: "Food" },
    { name: "Student Loan", amount: 200, dueDate: "Feb 15", daysLeft: 20, protected: true, category: "Education" },
  ]

  const recentTransactions = [
    {
      type: "income",
      amount: 400,
      source: "Campus Bookstore",
      date: "Today",
      time: "2:30 PM",
      batteryAction: "+$120 to Battery",
      category: "Work",
    },
    {
      type: "expense",
      amount: 25,
      source: "Starbucks",
      date: "Today",
      time: "10:15 AM",
      batteryAction: null,
      category: "Food",
    },
    {
      type: "expense",
      amount: 45,
      source: "Gas Station",
      date: "Yesterday",
      time: "6:45 PM",
      batteryAction: null,
      category: "Transportation",
    },
    {
      type: "battery",
      amount: 130,
      source: "Battery Boost",
      date: "Last Week",
      time: "Auto",
      batteryAction: "Slow week support",
      category: "System",
    },
    {
      type: "income",
      amount: 180,
      source: "Tutoring",
      date: "Last Week",
      time: "Various",
      batteryAction: "-$100 from Battery",
      category: "Work",
    },
  ]

  const weeklyData = [
    { week: "4 weeks ago", earned: 320, stable: 280, battery: 40 },
    { week: "3 weeks ago", earned: 180, stable: 280, battery: -100 },
    { week: "2 weeks ago", earned: 450, stable: 280, battery: 170 },
    { week: "Last week", earned: 180, stable: 280, battery: -100 },
    { week: "This week", earned: 400, stable: 280, battery: 120 },
  ]

  const spendingCategories = [
    { name: "Food & Dining", amount: 180, budget: 200, color: "bg-orange-500" },
    { name: "Transportation", amount: 85, budget: 100, color: "bg-blue-500" },
    { name: "Entertainment", amount: 45, budget: 80, color: "bg-purple-500" },
    { name: "Shopping", amount: 120, budget: 150, color: "bg-pink-500" },
    { name: "Other", amount: 35, budget: 50, color: "bg-gray-500" },
  ]

  const NavigationMenu = () => (
    <nav className="space-y-2">
      <Button variant="ghost" className="w-full justify-start gap-3 h-12">
        <Battery className="h-5 w-5" />
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-gray-600">
        <PieChart className="h-5 w-5" />
        Analytics
      </Button>
      <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-gray-600">
        <Target className="h-5 w-5" />
        Goals
      </Button>
      <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-gray-600">
        <Calendar className="h-5 w-5" />
        Bills
      </Button>
      <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-gray-600">
        <Settings className="h-5 w-5" />
        Settings
      </Button>
    </nav>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="py-4">
                <div className="flex items-center gap-3 mb-6">
                  <Battery className="h-6 w-6 text-blue-600" />
                  <span className="font-bold text-lg">Financial Battery</span>
                </div>
                <NavigationMenu />
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
            <Battery className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg">Financial Battery</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-white/90 backdrop-blur-md border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <Battery className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">Financial Battery</span>
            </div>

            <NavigationMenu />

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jordan Smith</div>
                  <div className="text-sm text-gray-500">Student</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Good afternoon, Jordan! 👋</h1>
                <p className="text-gray-600 mt-1">Your financial battery is keeping your cash flow stable</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </Button>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  Add Transaction
                </Button>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Safe to Spend</p>
                      <p className="text-3xl font-bold text-green-800">${safeToSpend}</p>
                      <p className="text-xs text-green-600 mt-1">Bills protected ✓</p>
                    </div>
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Battery Level</p>
                      <p className="text-3xl font-bold text-blue-800">{batteryLevel}%</p>
                      <p className="text-xs text-blue-600 mt-1">12 days buffer</p>
                    </div>
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Battery className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-700">This Week</p>
                      <p className="text-3xl font-bold text-purple-800">${thisWeekEarnings}</p>
                      <p className="text-xs text-purple-600 mt-1">+$120 to battery</p>
                    </div>
                    <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-700">Weekly Average</p>
                      <p className="text-3xl font-bold text-orange-800">${weeklyAverage}</p>
                      <p className="text-xs text-orange-600 mt-1">Stabilized income</p>
                    </div>
                    <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
              {/* Battery Visualization - Takes up 2 columns on xl screens */}
              <Card className="xl:col-span-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        Financial Power Grid
                      </CardTitle>
                      <CardDescription className="mt-2">Your income stabilization system in action</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 px-3 py-1">
                      System Optimal
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Enhanced Battery Visualization */}
                  <div className="relative p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-gray-800">Financial Battery Status</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-600">{batteryLevel}% Charged</span>
                      </div>
                    </div>
                    <Progress value={batteryLevel} className="h-6 mb-4" />
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="text-2xl font-bold text-blue-600">$1,240</div>
                        <div className="text-xs text-gray-500">Total Stored</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="text-2xl font-bold text-green-600">12</div>
                        <div className="text-xs text-gray-500">Buffer Days</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="text-2xl font-bold text-purple-600">85%</div>
                        <div className="text-xs text-gray-500">Stress Reduction</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Power Flow */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      This Week's Power Flow
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                        <div className="h-16 w-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Zap className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-orange-700 mb-1">${thisWeekEarnings}</div>
                        <div className="text-sm text-orange-600 font-medium">Variable Income</div>
                        <Badge variant="secondary" className="mt-2 bg-orange-100 text-orange-700">
                          Good Week! ⚡
                        </Badge>
                      </div>

                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <div className="h-16 w-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Battery className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-blue-700 mb-1">${weeklyAverage}</div>
                        <div className="text-sm text-blue-600 font-medium">Stable Output</div>
                        <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">
                          Auto-Smoothed
                        </Badge>
                      </div>

                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                        <div className="h-16 w-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Plus className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-green-700 mb-1">+$120</div>
                        <div className="text-sm text-green-600 font-medium">To Battery</div>
                        <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                          Charging
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Weekly Performance Chart */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">5-Week Performance</h4>
                    <div className="space-y-3">
                      {weeklyData.map((week, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-20 text-sm font-medium text-gray-600">{week.week}</div>
                          <div className="flex-1 flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 relative">
                              <div
                                className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                                style={{ width: `${(week.earned / 500) * 100}%` }}
                              ></div>
                            </div>
                            <div className="text-sm font-medium w-16">${week.earned}</div>
                          </div>
                          <div
                            className={`text-sm font-medium w-16 ${week.battery > 0 ? "text-green-600" : "text-orange-600"}`}
                          >
                            {week.battery > 0 ? "+" : ""}${week.battery}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Sidebar Content */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start gap-3 h-12 bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-5 w-5" />
                      Add Income
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3 h-12 bg-transparent">
                      <Target className="h-5 w-5" />
                      Set Savings Goal
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3 h-12 bg-transparent">
                      <Calendar className="h-5 w-5" />
                      Schedule Bill
                    </Button>
                  </CardContent>
                </Card>

                {/* Spending Overview */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <PieChart className="h-5 w-5" />
                      Spending This Month
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {spendingCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{category.name}</span>
                          <span className="text-sm text-gray-500">
                            ${category.amount}/${category.budget}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${category.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${(category.amount / category.budget) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      View Detailed Report
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced Tabs Section */}
            <Tabs defaultValue="bills" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 h-12 bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="bills" className="text-base">
                  Protected Bills
                </TabsTrigger>
                <TabsTrigger value="transactions" className="text-base">
                  Recent Activity
                </TabsTrigger>
                <TabsTrigger value="analytics" className="text-base">
                  Insights
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bills" className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <Shield className="h-6 w-6 text-blue-600" />
                          Expense Shield Active
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Your bills are automatically protected from daily spending
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-700 px-3 py-1">All Protected</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {upcomingBills.map((bill, index) => (
                        <div
                          key={index}
                          className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-4 h-4 rounded-full ${bill.protected ? "bg-green-500" : "bg-gray-300"}`}
                              />
                              <div>
                                <div className="font-semibold text-gray-800">{bill.name}</div>
                                <div className="text-sm text-gray-500">{bill.category}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg">${bill.amount}</div>
                              {bill.protected && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                  Protected
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Due {bill.dueDate}</span>
                            <span className={`font-medium ${bill.daysLeft <= 7 ? "text-orange-600" : "text-gray-600"}`}>
                              {bill.daysLeft} days left
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 h-12 bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-5 w-5 mr-2" />
                      Add New Bill to Protection
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">Recent Battery Activity</CardTitle>
                    <CardDescription>How your financial battery has been managing your cash flow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTransactions.map((transaction, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                transaction.type === "income"
                                  ? "bg-green-100"
                                  : transaction.type === "battery"
                                    ? "bg-blue-100"
                                    : "bg-gray-100"
                              }`}
                            >
                              {transaction.type === "income" ? (
                                <TrendingUp className="h-6 w-6 text-green-600" />
                              ) : transaction.type === "battery" ? (
                                <Battery className="h-6 w-6 text-blue-600" />
                              ) : (
                                <DollarSign className="h-6 w-6 text-gray-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">{transaction.source}</div>
                              <div className="text-sm text-gray-500">
                                {transaction.date} • {transaction.time}
                              </div>
                              {transaction.batteryAction && (
                                <div className="text-xs text-blue-600 font-medium mt-1">
                                  {transaction.batteryAction}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`font-bold text-lg ${
                                transaction.type === "income"
                                  ? "text-green-600"
                                  : transaction.type === "battery"
                                    ? "text-blue-600"
                                    : "text-gray-600"
                              }`}
                            >
                              {transaction.type === "expense" ? "-" : "+"}${transaction.amount}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {transaction.category}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-6 h-12 bg-transparent">
                      View All Transactions
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl">Income Stability Metrics</CardTitle>
                      <CardDescription>How the battery smooths your earnings volatility</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                          <span className="font-medium">Weekly Average Income</span>
                          <span className="font-bold text-xl text-blue-700">${weeklyAverage}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                          <span className="font-medium">Highest Week (Last 3 months)</span>
                          <span className="font-bold text-xl text-green-700">$450</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                          <span className="font-medium">Lowest Week (Last 3 months)</span>
                          <span className="font-bold text-xl text-red-700">$120</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                          <span className="font-medium">Volatility Reduction</span>
                          <Badge className="bg-purple-100 text-purple-700 text-lg px-3 py-1">85%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl">Battery Performance</CardTitle>
                      <CardDescription>Your financial resilience and system health</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                          <span className="font-medium">Emergency Buffer</span>
                          <span className="font-bold text-xl text-orange-700">12 days</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                          <span className="font-medium">Financial Stress Reduction</span>
                          <span className="font-bold text-xl text-green-700">85%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                          <span className="font-medium">Bills Auto-Protected</span>
                          <span className="font-bold text-xl text-blue-700">100%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-lg">
                          <span className="font-medium">System Health</span>
                          <Badge className="bg-indigo-100 text-indigo-700 text-lg px-3 py-1">Optimal</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
