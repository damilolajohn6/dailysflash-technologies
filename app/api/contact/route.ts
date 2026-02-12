import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Here you would typically:
    // 1. Send an email notification
    // 2. Save to database
    // 3. Integrate with CRM
    // 4. Send to Slack/Discord

    // For now, we'll just log and return success
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      service: data.service,
      budget: data.budget,
      message: data.message,
      newsletter: data.newsletter,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // If you have Resend or another email service configured:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   html: generateEmailTemplate(data),
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Optional: Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
