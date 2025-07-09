import {Blinds, Clock, Factory, Mail, MapPin, Phone, Send, ShieldMinus} from 'lucide-react';
import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Container} from "typedi";
import "reflect-metadata";
import MenuService from "@/Services/MenuService/MenuService";
import MenuLink from "@/models/Link/MenuLink";
import ContactFormV2 from "@/Components/Site/Contact/ContactFormV2";
import {useTranslation} from "react-i18next";


const ContactUs: React.FC<{industries: BlockProps [], contactLinks: MenuLink []}> = ({industries, contactLinks}) => {
    const menuService = Container.get(MenuService);
    const {t} = useTranslation();

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">{t('contact-us')}</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        {t('contact-us-hero')}
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="text-center bg-card border border-border rounded-lg p-6">
                            <div
                                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Phone className="h-8 w-8 text-primary-foreground"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('phone')}</h3>
                            <p className="text-muted-foreground">{menuService.getSplitLink(contactLinks, 'mobile')}</p>
                            {/*<p className="text-muted-foreground">+1 (555) 123-4568</p>*/}
                        </div>

                        <div className="text-center bg-card border border-border rounded-lg p-6">
                            <div
                                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Mail className="h-8 w-8 text-primary-foreground"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('email')}</h3>
                            <p className="text-muted-foreground">{menuService.getSplitLink(contactLinks, 'mail')}</p>
                            {/*<p className="text-muted-foreground">projects@sdh.com</p>*/}
                        </div>

                        <div className="text-center bg-card border border-border rounded-lg p-6">
                            <div
                                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-8 w-8 text-primary-foreground"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('address')}</h3>
                            {menuService.getAddress().map((address, key) => (
                                <p key={key} className="text-muted-foreground">{address}</p>
                            ))}
                            {/*<p className="text-muted-foreground">Office # 313 Makatib Building</p>*/}
                            {/*<p className="text-muted-foreground">Opp. Toyota AlMakhtoom road</p>*/}
                            {/*<p className="text-muted-foreground">Port Saeed, Dubai, UAE</p>*/}

                        </div>

                        <div className="text-center bg-card border border-border rounded-lg p-6">
                            <div
                                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-primary-foreground"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('hours')}</h3>
                            <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                            <p className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                        </div>

                        <div className="text-center bg-card border border-border rounded-lg p-6">
                            <div
                                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Blinds className="h-8 w-8 text-primary-foreground"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('trade-license-number')}</h3>
                            <p className="text-muted-foreground">535877</p>
                        </div>

                        <div className="text-center bg-card border border-border rounded-lg p-6">
                            <div
                                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <ShieldMinus className="h-8 w-8 text-primary-foreground"/>

                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('commercial-registration-number')}</h3>
                            <p className="text-muted-foreground">1002916</p>
                        </div>

                        <div className="text-center bg-card border border-border rounded-lg p-6">
                            <div
                                className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Factory className="h-8 w-8 text-primary-foreground"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('chamber-of-commerce-industry-registration-no')}</h3>
                            <p className="text-muted-foreground">61529</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        {/*<div className="bg-card border border-border rounded-lg p-8">*/}
                        {/*    <h2 className="text-3xl font-bold mb-6 text-foreground">Send us a Message</h2>*/}
                        {/*    <form onSubmit={handleSubmit} className="space-y-6">*/}
                        {/*        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
                        {/*            <div>*/}
                        {/*                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">*/}
                        {/*                    Full Name **/}
                        {/*                </label>*/}
                        {/*                <input*/}
                        {/*                    type="text"*/}
                        {/*                    id="name"*/}
                        {/*                    name="name"*/}
                        {/*                    value={formData.name}*/}
                        {/*                    onChange={handleInputChange}*/}
                        {/*                    required*/}
                        {/*                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"*/}
                        {/*                    placeholder="Your Name"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*            <div>*/}
                        {/*                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">*/}
                        {/*                    Email Address **/}
                        {/*                </label>*/}
                        {/*                <input*/}
                        {/*                    type="email"*/}
                        {/*                    id="email"*/}
                        {/*                    name="email"*/}
                        {/*                    value={formData.email}*/}
                        {/*                    onChange={handleInputChange}*/}
                        {/*                    required*/}
                        {/*                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"*/}
                        {/*                    placeholder="your@email.com"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
                        {/*            <div>*/}
                        {/*                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">*/}
                        {/*                    Phone Number*/}
                        {/*                </label>*/}
                        {/*                <input*/}
                        {/*                    type="tel"*/}
                        {/*                    id="phone"*/}
                        {/*                    name="phone"*/}
                        {/*                    value={formData.phone}*/}
                        {/*                    onChange={handleInputChange}*/}
                        {/*                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"*/}
                        {/*                    placeholder="(555) 123-4567"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*            <div>*/}
                        {/*                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">*/}
                        {/*                    Company*/}
                        {/*                </label>*/}
                        {/*                <input*/}
                        {/*                    type="text"*/}
                        {/*                    id="company"*/}
                        {/*                    name="company"*/}
                        {/*                    value={formData.company}*/}
                        {/*                    onChange={handleInputChange}*/}
                        {/*                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"*/}
                        {/*                    placeholder="Your Company"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*        <div>*/}
                        {/*            <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">*/}
                        {/*                Project Type*/}
                        {/*            </label>*/}
                        {/*            <select*/}
                        {/*                id="projectType"*/}
                        {/*                name="projectType"*/}
                        {/*                value={formData.projectType}*/}
                        {/*                onChange={handleInputChange}*/}
                        {/*                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"*/}
                        {/*            >*/}
                        {/*                <option value="">Select Project Type</option>*/}
                        {/*                <option value="commercial">Commercial</option>*/}
                        {/*                <option value="residential">Residential</option>*/}
                        {/*                <option value="industrial">Industrial</option>*/}
                        {/*                <option value="healthcare">Healthcare</option>*/}
                        {/*                <option value="education">Education</option>*/}
                        {/*                <option value="retail">Retail</option>*/}
                        {/*                <option value="other">Other</option>*/}
                        {/*            </select>*/}
                        {/*        </div>*/}

                        {/*        <div>*/}
                        {/*            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">*/}
                        {/*                Project Details **/}
                        {/*            </label>*/}
                        {/*            <textarea*/}
                        {/*                id="message"*/}
                        {/*                name="message"*/}
                        {/*                value={formData.message}*/}
                        {/*                onChange={handleInputChange}*/}
                        {/*                required*/}
                        {/*                rows={6}*/}
                        {/*                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"*/}
                        {/*                placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."*/}
                        {/*            ></textarea>*/}
                        {/*        </div>*/}

                        {/*        <button*/}
                        {/*            type="submit"*/}
                        {/*            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center"*/}
                        {/*        >*/}
                        {/*            <Send className="h-5 w-5 mr-2" />*/}
                        {/*            Send Message*/}
                        {/*        </button>*/}
                        {/*    </form>*/}
                        {/*</div>*/}

                        <ContactFormV2 industries={industries}></ContactFormV2>

                        {/* Map and Additional Info */}
                        <div className="space-y-8">
                            {/* Map Placeholder */}
                            <div className="bg-card border border-border rounded-lg overflow-hidden">
                                {/*<div className="h-80 bg-gray-200 flex items-center justify-center">*/}
                                {/*    <div className="text-center text-gray-600">*/}
                                {/*        <MapPin className="h-12 w-12 mx-auto mb-4" />*/}
                                {/*        <p className="text-lg font-medium">Interactive Map</p>*/}
                                {/*        <p className="text-sm">123 Business Street, City, State 12345</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.3835780967206!2d55.33020777538377!3d25.257678977672022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE1JzI3LjYiTiA1NcKwMTknNTguMCJF!5e0!3m2!1sen!2sae!4v1751881104918!5m2!1sen!2sae"
                                    width="100%"
                                    height="450"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            {/* Office Information */}
                            <div className="bg-card border border-border rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">Visit Our Office</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                                        <div>
                                            {menuService.getAddress().map((address, key) => (
                                                <p key={key} className="text-muted-foreground">{address}</p>
                                            ))}
                                            {/*<p className="font-medium text-foreground">SDH Construction Headquarters</p>*/}
                                            {/*<p className="text-muted-foreground">123 Business Street<br/>City, State 12345</p>*/}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-primary mr-3" />
                                        <p className="text-muted-foreground">{menuService.getSplitLink(contactLinks, 'mobile')}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-primary mr-3" />
                                        <p className="text-muted-foreground">{menuService.getSplitLink(contactLinks, 'mail')}</p>
                                    </div>
                                </div>
                            </div>

                            {/*/!* Emergency Contact *!/*/}
                            {/*<div className="bg-primary text-primary-foreground rounded-lg p-6">*/}
                            {/*    <h3 className="text-xl font-semibold mb-4">24/7 Emergency Support</h3>*/}
                            {/*    <p className="mb-4">*/}
                            {/*        For urgent construction issues or emergencies, our support team is available around the clock.*/}
                            {/*    </p>*/}
                            {/*    <div className="flex items-center">*/}
                            {/*        <Phone className="h-5 w-5 mr-3" />*/}
                            {/*        <p className="font-semibold">Emergency: +1 (555) 911-HELP</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ContactUs;
