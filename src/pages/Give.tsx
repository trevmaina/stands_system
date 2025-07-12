import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Phone, Heart, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Give = () => {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your generosity!",
      description: "Your donation will make a difference in our community.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Givings and Donations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your generosity enables us to continue our mission of spreading God's love and serving our community.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Payment Method Selection */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Button
                variant={paymentMethod === "mpesa" ? "default" : "outline"}
                onClick={() => setPaymentMethod("mpesa")}
                className="h-16"
              >
                <Phone className="mr-2 h-5 w-5" />
                M-Pesa
              </Button>
              <Button
                variant={paymentMethod === "airtel" ? "default" : "outline"}
                onClick={() => setPaymentMethod("airtel")}
                className="h-16"
              >
                <Phone className="mr-2 h-5 w-5" />
                Airtel Money
              </Button>
              <Button
                variant={paymentMethod === "card" ? "default" : "outline"}
                onClick={() => setPaymentMethod("card")}
                className="h-16"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Visa/Mastercard
              </Button>
              <Button
                variant={paymentMethod === "paypal" ? "default" : "outline"}
                onClick={() => setPaymentMethod("paypal")}
                className="h-16"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                PayPal
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Payment Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    {paymentMethod === "mpesa" && "Give via M-Pesa"}
                    {paymentMethod === "airtel" && "Give via Airtel Money"}
                    {paymentMethod === "card" && "Pay via Card"}
                    {paymentMethod === "paypal" && "Pay via PayPal"}
                  </CardTitle>
                  <CardDescription>
                    Every gift, no matter the size, makes a difference.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name (optional)</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                      />
                    </div>

                    {(paymentMethod === "mpesa" || paymentMethod === "airtel") && (
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+254 XXX XXX XXX"
                          required
                        />
                      </div>
                    )}

                    {paymentMethod === "card" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                              id="cvc"
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tithe">Tithe</SelectItem>
                          <SelectItem value="offering">Offering</SelectItem>
                          <SelectItem value="donation">General Donation</SelectItem>
                          <SelectItem value="missions">Missions</SelectItem>
                          <SelectItem value="building">Building Fund</SelectItem>
                          <SelectItem value="youth">Youth Ministry</SelectItem>
                          <SelectItem value="children">Children Ministry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount ({paymentMethod === "card" || paymentMethod === "paypal" ? "USD" : "KES"})</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      {paymentMethod === "mpesa" && "Give via M-Pesa"}
                      {paymentMethod === "airtel" && "Give via Airtel Money"}
                      {paymentMethod === "card" && "Pay with Card"}
                      {paymentMethod === "paypal" && "Pay with PayPal"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Alternative Giving Methods */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Give by Cheque</CardTitle>
                    <CardDescription>
                      If you'd prefer to give by cheque, please use the following details:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Payable to:</h4>
                        <p className="text-muted-foreground">PCEA St Andrew's Church</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Mail to:</h4>
                        <p className="text-muted-foreground">
                          PO Box 41282,<br />
                          Nairobi, 00100
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tax Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      PCEA St Andrew's Church is a registered non-profit organization. 
                      Donations are tax-deductible in Kenya. All gifts are in KSH and 
                      distribution is made at the discretion of PCEA St Andrew's Church.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Thank You</h3>
                      <p className="text-muted-foreground text-sm">
                        Your generous giving helps us reach more people with God's love 
                        and make a positive impact in our community.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;