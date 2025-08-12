import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Star, Filter, Search, Heart } from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "merchandise", name: "Merchandise" },
    { id: "events", name: "Event Products" },
    { id: "projects", name: "Special Projects" }
  ];

  const products = [
    {
      id: 1,
      name: "PCEA St Andrew's T-Shirt",
      price: 1500,
      category: "merchandise",
      image: "/placeholder.svg",
      description: "Comfortable cotton t-shirt with church logo",
      rating: 4.8,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Faith Journey Devotional Book",
      price: 800,
      category: "merchandise",
      image: "/placeholder.svg",
      description: "Daily devotional written by our pastoral team",
      rating: 4.9,
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: "Church Coffee Mug",
      price: 600,
      category: "merchandise",
      image: "/placeholder.svg",
      description: "Ceramic mug with inspirational verse",
      rating: 4.7,
      inStock: true,
      featured: false
    },
    {
      id: 4,
      name: "Youth Conference 2024 Ticket",
      price: 2500,
      category: "events",
      image: "/placeholder.svg",
      description: "Early bird ticket for annual youth conference",
      rating: 5.0,
      inStock: true,
      featured: true
    },
    {
      id: 5,
      name: "Annual Dinner Ticket",
      price: 3000,
      category: "events",
      image: "/placeholder.svg",
      description: "Ticket for church annual dinner and awards night",
      rating: 4.8,
      inStock: true,
      featured: false
    },
    {
      id: 6,
      name: "New Sanctuary Building Fund",
      price: 5000,
      category: "projects",
      image: "/placeholder.svg",
      description: "Contribution towards new sanctuary construction",
      rating: 5.0,
      inStock: true,
      featured: true
    },
    {
      id: 7,
      name: "Community Outreach Support",
      price: 2000,
      category: "projects",
      image: "/placeholder.svg",
      description: "Support our community feeding programs",
      rating: 4.9,
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: "Mission Trip Sponsorship",
      price: 10000,
      category: "projects",
      image: "/placeholder.svg",
      description: "Sponsor a missionary for overseas mission work",
      rating: 5.0,
      inStock: true,
      featured: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Church Shop
          </h1>
          <p className="text-xl text-muted-foreground">
            Support our ministry through merchandise, events, and special projects
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        {selectedCategory === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.filter(product => product.featured).map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                      <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <Badge className="absolute top-2 left-2">Featured</Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">
                        KSh {product.price.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all" ? "All Products" : 
               categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-muted-foreground">
              {filteredProducts.length} products
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                  </div>
                  {product.featured && (
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      Featured
                    </Badge>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-primary">
                      KSh {product.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{product.rating}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    <ShoppingCart className="h-3 w-3 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;