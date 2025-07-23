import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, Truck, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopHub</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're passionate about bringing you the best shopping experience with quality products, 
              competitive prices, and exceptional customer service.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2020, ShopHub started as a small e-commerce platform with a big vision: 
                  to make quality products accessible to everyone. What began as a passion project has 
                  grown into a thriving marketplace serving thousands of customers worldwide.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team is dedicated to curating the best products from trusted suppliers, ensuring 
                  that every item in our catalog meets our high standards for quality, value, and customer satisfaction.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, ShopHub continues to evolve, always putting our customers first and striving 
                  to provide an exceptional shopping experience that you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                  <p className="text-muted-foreground">
                    We carefully select every product to ensure it meets our high standards for quality and durability.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
                  <p className="text-muted-foreground">
                    Your privacy and security are our top priorities. Shop with confidence knowing your data is safe.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Quick and reliable shipping to get your orders to you as fast as possible.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-warning" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Customer Care</h3>
                  <p className="text-muted-foreground">
                    Our dedicated support team is here to help you every step of the way.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    JD
                  </div>
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-muted-foreground mb-3">CEO & Founder</p>
                  <p className="text-sm text-muted-foreground">
                    Passionate about creating exceptional shopping experiences and building lasting customer relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    JS
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                  <p className="text-muted-foreground mb-3">Head of Operations</p>
                  <p className="text-sm text-muted-foreground">
                    Ensures smooth operations and maintains our high standards for product quality and customer service.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    MB
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mike Brown</h3>
                  <p className="text-muted-foreground mb-3">Customer Success</p>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to providing exceptional customer support and ensuring every customer has a great experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;