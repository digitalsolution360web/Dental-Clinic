"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6">
          Your appointment request has been received. We'll call you shortly to confirm your slot.
        </p>

        {/* Appointment Details Box */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm text-gray-500 mb-3">What happens next?</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-600 font-bold">1</span>
              <span className="text-sm text-gray-700">You'll get a confirmation call within 30 mins</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-600 font-bold">2</span>
              <span className="text-sm text-gray-700">WhatsApp reminder 2 hours before appointment</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-600 font-bold">3</span>
              <span className="text-sm text-gray-700">Visit us at scheduled time</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-500 mb-6">
          Need to reschedule? Call us: <a href="tel:+919967756611" className="text-green-600 font-medium">+91 99677 56611</a>
        </div>

        {/* Back to Home Button */}
        <Link 
          href="/"
          className="inline-block w-full bg-green-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-green-700 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}