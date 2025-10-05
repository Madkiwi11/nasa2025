"use client"

import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { MapPin, Activity, Sprout } from "lucide-react"

export default function FilterPanel({ filters, setFilters }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 animate-slide-up">
      {/* Region Filter */}
      <div className="space-y-2">
        <Label htmlFor="region" className="text-foreground flex items-center gap-2 font-semibold">
          <MapPin className="h-4 w-4 text-pink-600" />
          Region
        </Label>
        <Select value={filters.region} onValueChange={(value) => setFilters({ ...filters, region: value })}>
          <SelectTrigger
            id="region"
            className="glass-card border-2 border-pink-200/50 hover:border-pink-300/70 transition-all"
          >
            <SelectValue placeholder="All Regions" />
          </SelectTrigger>
          <SelectContent side="top" sideOffset={4} avoidCollisions={false}>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="Baghdad">Baghdad</SelectItem>
            <SelectItem value="Wasit">Wasit</SelectItem>
            <SelectItem value="Sulaymaniyah">Sulaymaniyah</SelectItem>
            <SelectItem value="Erbil">Erbil</SelectItem>
            <SelectItem value="Diwaniyah">Diwaniyah</SelectItem>
            <SelectItem value="Mosul">Mosul</SelectItem>
            <SelectItem value="Basra">Basra</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Plant Status Filter */}
      <div className="space-y-2">
        <Label htmlFor="status" className="text-foreground flex items-center gap-2 font-semibold">
          <Activity className="h-4 w-4 text-green-600" />
          Plant Status
        </Label>
        <Select value={filters.status} onValueChange={(value) => setFilters({ ...filters, status: value })}>
          <SelectTrigger
            id="status"
            className="glass-card border-2 border-green-200/50 hover:border-green-300/70 transition-all"
          >
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent side="top" sideOffset={4} avoidCollisions={false}>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="Healthy">Healthy</SelectItem>
            <SelectItem value="Blooming">Blooming</SelectItem>
            <SelectItem value="Stressed">Stressed</SelectItem>
            <SelectItem value="Dormant">Dormant</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Plant Type Filter */}
      <div className="space-y-2">
        <Label htmlFor="plantType" className="text-foreground flex items-center gap-2 font-semibold">
          <Sprout className="h-4 w-4 text-purple-600" />
          Plant Type
        </Label>
        <Select value={filters.plantType} onValueChange={(value) => setFilters({ ...filters, plantType: value })}>
          <SelectTrigger
            id="plantType"
            className="glass-card border-2 border-purple-200/50 hover:border-purple-300/70 transition-all"
          >
            <SelectValue placeholder="All Plants" />
          </SelectTrigger>
          <SelectContent side="top" sideOffset={4} avoidCollisions={false}>
           <SelectItem value="all">All Plants</SelectItem>
  <SelectItem value="Date Palm">Date Palm</SelectItem>
  <SelectItem value="Wheat">Wheat</SelectItem>
  <SelectItem value="Vegetables">Vegetables</SelectItem>
  <SelectItem value="Citrus">Citrus</SelectItem>
  <SelectItem value="Salt-tolerant Plants">Salt-tolerant Plants</SelectItem>
  <SelectItem value="Pomegranate">Pomegranate</SelectItem>
  <SelectItem value="Olive Tree">Olive Tree</SelectItem>
  <SelectItem value="Barley">Barley</SelectItem>
  <SelectItem value="Fig Tree">Fig Tree</SelectItem>
  <SelectItem value="Tomato">Tomato</SelectItem>
  <SelectItem value="Cucumber">Cucumber</SelectItem>
  <SelectItem value="Grape Vine">Grape Vine</SelectItem>
  <SelectItem value="Apricot Tree">Apricot Tree</SelectItem>
  <SelectItem value="Eggplant">Eggplant</SelectItem>
  <SelectItem value="Walnut Tree">Walnut Tree</SelectItem>
  <SelectItem value="Watermelon">Watermelon</SelectItem>
  <SelectItem value="Almond Tree">Almond Tree</SelectItem>
  <SelectItem value="Pepper">Pepper</SelectItem>
  <SelectItem value="Onion">Onion</SelectItem>
  <SelectItem value="Garlic">Garlic</SelectItem>
  <SelectItem value="Carrot">Carrot</SelectItem>
  <SelectItem value="Rice">Rice</SelectItem>
  <SelectItem value="Maize">Maize</SelectItem>
  <SelectItem value="Okra">Okra</SelectItem>
  <SelectItem value="Peas">Peas</SelectItem>
  <SelectItem value="Lentils">Lentils</SelectItem>
  <SelectItem value="Chickpeas">Chickpeas</SelectItem>
  <SelectItem value="Melon">Melon</SelectItem>
  <SelectItem value="Sunflower">Sunflower</SelectItem>
  <SelectItem value="Sorghum">Sorghum</SelectItem>
  <SelectItem value="Fava Bean">Fava Bean</SelectItem>
  <SelectItem value="Spinach">Spinach</SelectItem>
  <SelectItem value="Lettuce">Lettuce</SelectItem>
  <SelectItem value="Pistachio">Pistachio</SelectItem>
  <SelectItem value="Zucchini">Zucchini</SelectItem>
  <SelectItem value="Beans">Beans</SelectItem>
  <SelectItem value="Sweet Corn">Sweet Corn</SelectItem>
  <SelectItem value="Rosemary">Rosemary</SelectItem>
  <SelectItem value="Thyme">Thyme</SelectItem>
  <SelectItem value="Medicinal Herbs">Medicinal Herbs</SelectItem>
  <SelectItem value="Reed">Reed</SelectItem>
  <SelectItem value="Water Lily">Water Lily</SelectItem>
  <SelectItem value="Lotus">Lotus</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
