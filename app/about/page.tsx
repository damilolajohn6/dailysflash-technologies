import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Handshake,
  Lightbulb,
  Eye,
  Heart,
  Target,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Users,
  Globe,
  Building2,
  Calendar,
  Trophy,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/blocks/section-header";
import {
  SITE_CONFIG,
  TEAM_MEMBERS,
  COMPANY_VALUES,
  COMPANY_MILESTONES,
  OFFICE_LOCATIONS,
  STATS,
} from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DailysFlash Technologies - our story, our team, and our mission to deliver exceptional digital solutions across Africa and beyond.",
  openGraph: {
    title: `About Us | ${SITE_CONFIG.name}`,
    description:
      "Learn about DailysFlash Technologies - our story, our team, and our mission to deliver exceptional digital solutions across Africa and beyond.",
  },
};

// Icon mapping for values
const valueIconMap: Record<string, any> = {
  Award,
  Handshake,
  Lightbulb,
  Eye,
  Heart,
  Target,
};

// JSON-LD
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    foundingDate: "2014",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100,
    },
    address: OFFICE_LOCATIONS.map((office) => ({
      "@type": "PostalAddress",
      addressLocality: office.city,
      addressCountry: office.country,
      streetAddress: office.address,
    })),
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src={IMAGES.team.collaboration}
              alt="Our team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>

          <div className="section-container relative">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-6">
                About Us
              </Badge>
              <h1 className="heading-1 mb-6">
                We build digital products that{" "}
                <span className="text-primary">transform businesses</span>
              </h1>
              <p className="body-large mb-8">
                Founded in 2021, DailysFlash Technologies has grown from a small
                Lagos startup to one of Africa&apos;s leading digital agencies. We
                combine world-class talent with deep local expertise to deliver
                solutions that make a real difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#team">Meet the Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 border-y bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Calendar, value: "10+", label: "Years in Business" },
                { icon: Users, value: "50+", label: "Team Members" },
                { icon: Globe, value: "3", label: "Countries" },
                { icon: Trophy, value: "500+", label: "Projects Delivered" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src={IMAGES.about.story}
                    alt="Our story"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                {/* Floating quote card */}
                <div className="absolute -bottom-8 -right-8 bg-card border rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block">
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-sm italic mb-3">
                    &ldquo;We started with a dream to build technology solutions
                    that truly understand and serve African markets.&rdquo;
                  </p>
                  <p className="text-sm font-medium">— Oluwaseun Adeyemi, Founder</p>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  Our Story
                </span>
                <h2 className="heading-2 mt-2 mb-6">
                  From a Lagos apartment to Africa&apos;s leading digital agency
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In 2021, our founder Esan Damilola left a comfortable
                    position at ApexKonnect with a bold vision: to build a
                    world-class technology company rooted in Africa. Armed with a
                    laptop, a small savings account, and an unwavering belief in
                    African talent, DailysFlash was born in a small apartment in
                    Lagos.
                  </p>
                  <p>
                    The early years weren&apos;t easy. We bootstrapped our growth,
                    reinvesting every profit back into the company. We said no to
                    shortcuts and yes to quality, even when it meant slower growth.
                    This commitment to excellence became our calling card.
                  </p>
                  <p>
                    Today, we&apos;re proud to be one of Africa&apos;s most trusted
                    digital partners. We&apos;ve helped hundreds of businesses—from
                    ambitious startups to Fortune 500 companies—build digital
                    products that matter. But we&apos;re just getting started.
                  </p>
                  <p>
                    Our mission remains the same: to prove that world-class
                    technology can be built anywhere, by anyone, for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses with innovative digital solutions that
                    drive growth, enhance user experiences, and create lasting
                    value. We believe technology should be accessible,
                    understandable, and impactful for organizations of all sizes.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be Africa&apos;s most trusted technology partner, recognized
                    globally for our excellence, innovation, and impact. We
                    envision a future where African-built technology solutions
                    compete and win on the world stage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Our Values"
              title="The principles that guide everything we do"
              description="These aren't just words on a wall—they're the foundation of every decision we make and every interaction we have."
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_VALUES.map((value, index) => {
                const Icon = valueIconMap[value.icon] || Award;
                return (
                  <Card key={index} className="group hover:border-primary/30 transition-colors">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline/Milestones Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Our Journey"
              title="Key milestones in our story"
              description="From humble beginnings to where we are today—and we're just getting started."
              className="mb-16"
            />

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              <div className="space-y-12">
                {COMPANY_MILESTONES.map((milestone, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative grid md:grid-cols-2 gap-8 md:gap-16",
                      index % 2 === 0 ? "md:text-right" : "md:[direction:rtl]"
                    )}
                  >
                    {/* Content */}
                    <div
                      className={cn(
                        "pl-8 md:pl-0",
                        index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:[direction:ltr]"
                      )}
                    >
                      <div
                        className={cn(
                          index % 2 === 1 && "md:[direction:ltr]"
                        )}
                      >
                        <Badge variant="outline" className="mb-3">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty column for alternating layout */}
                    <div className="hidden md:block" />

                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Our Team"
              title="Meet the people behind the magic"
              description="A diverse team of strategists, designers, engineers, and problem-solvers united by a shared passion for excellence."
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <Card key={member.id} className="group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay with social links */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join the team CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-4">
                Want to join our team? We&apos;re always looking for talented people.
              </p>
              <Button variant="outline" asChild>
                <Link href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  Our Culture
                </span>
                <h2 className="heading-2 mt-2 mb-6">
                  A place where great work happens
                </h2>
                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    We believe that the best work comes from happy, empowered
                    teams. That&apos;s why we&apos;ve built a culture that
                    prioritizes growth, collaboration, and work-life balance.
                  </p>
                  <p>
                    Our team enjoys flexible working arrangements, continuous
                    learning opportunities, and a supportive environment where
                    everyone&apos;s voice matters. We celebrate diversity and
                    believe that different perspectives make us stronger.
                  </p>
                  <p>
                    Whether it&apos;s our monthly team outings, learning
                    Fridays, or our annual retreat, we make time to connect,
                    learn, and have fun together.
                  </p>
                </div>
                {/* <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Remote-First", description: "Work from anywhere" },
                    { label: "Learning Budget", description: "$2,000/year" },
                    { label: "Unlimited PTO", description: "We trust you" },
                    { label: "Health Coverage", description: "Comprehensive plans" },
                  ].map((perk) => (
                    <div key={perk.label}>
                      <div className="font-semibold">{perk.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {perk.description}
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={IMAGES.team.culture}
                      alt="Team culture"
                      width={300}
                      height={400}
                      className="object-cover w-full h-[250px]"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={IMAGES.team.celebration}
                      alt="Team celebration"
                      width={300}
                      height={200}
                      className="object-cover w-full h-[150px]"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={IMAGES.team.brainstorm}
                      alt="Team brainstorm"
                      width={300}
                      height={200}
                      className="object-cover w-full h-[150px]"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={IMAGES.team.teamwork}
                      alt="Team at work"
                      width={300}
                      height={400}
                      className="object-cover w-full h-[250px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        

        {/* Offices Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Our Office"
              title="Where to find us"
            //   description="With offices across Africa, we're always close to our clients."
              className="mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {OFFICE_LOCATIONS.map((office) => (
                <Card key={office.city} className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={office.image}
                      alt={`${office.city} office`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-primary">{office.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{office.city}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {office.country}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                        <a
                          href={`tel:${office.phone}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="relative bg-card border rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={IMAGES.team.office}
                  alt="Our office"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
                <h2 className="heading-2 mb-4">
                  Ready to start something great?
                </h2>
                <p className="body-large max-w-xl mx-auto mb-8">
                  Whether you have a project in mind or just want to explore
                  possibilities, we&apos;d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
