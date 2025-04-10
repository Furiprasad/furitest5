
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmailSignatureGenerator = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    linkedIn: "",
    address: "",
    tagline: "",
  });

  const signatureRef = useRef<HTMLDivElement>(null);
  const [activeTemplate, setActiveTemplate] = useState("modern");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const copyToClipboard = () => {
    if (signatureRef.current) {
      const range = document.createRange();
      range.selectNode(signatureRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      try {
        document.execCommand("copy");
        toast.success("Email signature copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy signature");
      }
      window.getSelection()?.removeAllRanges();
    }
  };

  const renderSignature = () => {
    if (activeTemplate === "modern") {
      return (
        <div 
          ref={signatureRef} 
          className="border p-4 rounded-md bg-white"
          style={{ minHeight: "180px" }}
        >
          <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#333333" }}>
            <tbody>
              <tr>
                <td style={{ paddingRight: "15px", borderRight: "3px solid #6366f1" }}>
                  {formData.name && <div style={{ fontWeight: "bold", fontSize: "16px", color: "#4f46e5" }}>{formData.name}</div>}
                  {formData.position && <div style={{ color: "#6b7280" }}>{formData.position}</div>}
                  {formData.company && <div style={{ fontWeight: "bold" }}>{formData.company}</div>}
                </td>
                <td style={{ paddingLeft: "15px", verticalAlign: "top" }}>
                  {formData.phone && (
                    <div style={{ marginBottom: "5px" }}>
                      <span style={{ color: "#6b7280", paddingRight: "5px" }}>📱</span> {formData.phone}
                    </div>
                  )}
                  {formData.email && (
                    <div style={{ marginBottom: "5px" }}>
                      <span style={{ color: "#6b7280", paddingRight: "5px" }}>📧</span>{" "}
                      <a href={`mailto:${formData.email}`} style={{ color: "#4f46e5", textDecoration: "none" }}>
                        {formData.email}
                      </a>
                    </div>
                  )}
                  {formData.website && (
                    <div style={{ marginBottom: "5px" }}>
                      <span style={{ color: "#6b7280", paddingRight: "5px" }}>🌐</span>{" "}
                      <a href={formData.website.startsWith("http") ? formData.website : `https://${formData.website}`} style={{ color: "#4f46e5", textDecoration: "none" }}>
                        {formData.website}
                      </a>
                    </div>
                  )}
                  {formData.linkedIn && (
                    <div style={{ marginBottom: "5px" }}>
                      <span style={{ color: "#6b7280", paddingRight: "5px" }}>in</span>{" "}
                      <a href={formData.linkedIn.startsWith("http") ? formData.linkedIn : `https://${formData.linkedIn}`} style={{ color: "#4f46e5", textDecoration: "none" }}>
                        LinkedIn
                      </a>
                    </div>
                  )}
                  {formData.address && (
                    <div style={{ marginBottom: "5px" }}>
                      <span style={{ color: "#6b7280", paddingRight: "5px" }}>📍</span> {formData.address}
                    </div>
                  )}
                </td>
              </tr>
              {formData.tagline && (
                <tr>
                  <td colSpan={2} style={{ paddingTop: "10px", borderTop: "1px solid #e5e7eb", marginTop: "10px", fontStyle: "italic", color: "#6b7280" }}>
                    {formData.tagline}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    } 
    
    // Minimal template
    return (
      <div 
        ref={signatureRef} 
        className="border p-4 rounded-md bg-white"
        style={{ minHeight: "180px" }}
      >
        <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#333333" }}>
          <tbody>
            <tr>
              <td>
                {formData.name && <div style={{ fontWeight: "bold", fontSize: "16px" }}>{formData.name}</div>}
                {formData.position && <div style={{ color: "#6b7280" }}>{formData.position}</div>}
                {formData.company && <div style={{ marginBottom: "8px" }}>{formData.company}</div>}
                
                <div style={{ fontSize: "13px" }}>
                  {formData.phone && <span>{formData.phone} | </span>}
                  {formData.email && (
                    <span>
                      <a href={`mailto:${formData.email}`} style={{ color: "#4f46e5", textDecoration: "none" }}>
                        {formData.email}
                      </a>
                      {(formData.website || formData.linkedIn) ? " | " : ""}
                    </span>
                  )}
                  {formData.website && (
                    <span>
                      <a href={formData.website.startsWith("http") ? formData.website : `https://${formData.website}`} style={{ color: "#4f46e5", textDecoration: "none" }}>
                        Website
                      </a>
                      {formData.linkedIn ? " | " : ""}
                    </span>
                  )}
                  {formData.linkedIn && (
                    <span>
                      <a href={formData.linkedIn.startsWith("http") ? formData.linkedIn : `https://${formData.linkedIn}`} style={{ color: "#4f46e5", textDecoration: "none" }}>
                        LinkedIn
                      </a>
                    </span>
                  )}
                </div>
                
                {formData.address && <div style={{ fontSize: "13px", marginTop: "5px" }}>{formData.address}</div>}
                {formData.tagline && <div style={{ fontSize: "12px", fontStyle: "italic", marginTop: "8px", color: "#6b7280" }}>{formData.tagline}</div>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold mb-2">Create Your Email Signature</h2>
        <p className="text-sm text-gray-600 mb-4">
          Fill in the form below to generate a professional email signature.
        </p>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="position">Job Title</Label>
              <Input
                id="position"
                placeholder="Marketing Manager"
                value={formData.position}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Acme Inc."
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="www.example.com"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="linkedIn">LinkedIn URL</Label>
              <Input
                id="linkedIn"
                placeholder="linkedin.com/in/johndoe"
                value={formData.linkedIn}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="address">Address (Optional)</Label>
              <Input
                id="address"
                placeholder="123 Main St, City, Country"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="tagline">Tagline or Quote (Optional)</Label>
              <Textarea
                id="tagline"
                placeholder="Helping businesses grow through innovative solutions"
                value={formData.tagline}
                onChange={handleInputChange}
                className="resize-none"
                rows={2}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <Tabs defaultValue="modern" value={activeTemplate} onValueChange={setActiveTemplate}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Your Signature Preview</h3>
            <TabsList>
              <TabsTrigger value="modern">Modern</TabsTrigger>
              <TabsTrigger value="minimal">Minimal</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="modern" className="mt-0">
            {renderSignature()}
          </TabsContent>
          
          <TabsContent value="minimal" className="mt-0">
            {renderSignature()}
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 text-right">
          <Button onClick={copyToClipboard} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Copy Signature
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailSignatureGenerator;
