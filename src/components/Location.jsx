import { MapPin, Phone, Navigation, Clock } from 'lucide-react';

export default function Location() {
  const mapsUrl =
    'https://www.google.com/maps/search/Anison+2HQ7+5FW+Swastik+Society+Cross+Rd+Swastik+Society+Navrangpura+Ahmedabad+Gujarat+380009';
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Anison+2HQ7+5FW+Swastik+Society+Cross+Rd+Swastik+Society+Navrangpura+Ahmedabad+Gujarat+380009';
  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5714!3d23.0343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSwastik+Society+Navrangpura+Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000';

  return (
    <section id="location" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Visit Us
          </h2>
          <p className="text-lg text-brand-yellow-dark font-medium mb-6">
            અમારો સંપર્ક કરો
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Info Card */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Anison Complex, 2HQ7+5FW,
                    <br />
                    Swastik Society Cross Rd,
                    <br />
                    Swastik Society, Navrangpura,
                    <br />
                    Ahmedabad, Gujarat 380009, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a
                    href="tel:09558732687"
                    className="text-brand-orange hover:text-brand-orange-dark font-medium text-lg transition-colors"
                  >
                    095587 32687
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-500 text-sm">
                    Mon – Sat: 9:00 AM – 8:00 PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-orange-dark transition-all shadow-md hover:shadow-lg"
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3.5 rounded-full text-sm font-semibold border border-gray-200 hover:border-brand-yellow hover:text-brand-orange transition-all shadow-sm"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100 min-h-[400px]">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GYM ID Nutrition Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
