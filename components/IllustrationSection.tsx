export default function IllustrationSection() {
  return (
    <div className="relative w-full h-full max-w-2xl max-h-[900px] flex items-center justify-center">
      {/* Main Illustration - Person in Monitor */}
      <div className="relative z-10 flex items-center justify-center mt-20">
        {/* Monitor */}
        <div className="relative">
          {/* Monitor Frame (Black) */}
          <div className="w-80 h-64 bg-gray-900 rounded-lg shadow-2xl p-2">
            {/* Monitor Screen (White) */}
            <div className="w-full h-full bg-white rounded relative overflow-hidden">
              {/* Person Illustration */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                {/* Head */}
                <div className="relative">
                  {/* Headset */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-24 h-10 bg-purple-primary rounded-full flex items-center justify-center">
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-primary rounded-full"></div>
                    </div>
                  </div>
                  {/* Hair */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-14 bg-gray-900 rounded-full -z-10"></div>
                  {/* Face */}
                  <div className="w-20 h-20 bg-white rounded-full border-2 border-gray-200 relative z-10"></div>
                </div>
                {/* Body */}
                <div className="mt-3 relative">
                  <div className="w-24 h-28 bg-purple-primary rounded-t-full mx-auto"></div>
                  {/* Hand with OK gesture */}
                  <div className="absolute right-2 top-6">
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-purple-primary flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-purple-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wavy lines at bottom and sides */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg
                  className="w-full h-16"
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30 L400,60 L0,60 Z"
                    fill="#E8D5FF"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-16">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 60 300"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M30,0 Q10,50 30,100 T30,200 T30,300 L60,300 L60,0 Z"
                    fill="#E8D5FF"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-16">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 60 300"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M30,0 Q50,50 30,100 T30,200 T30,300 L0,300 L0,0 Z"
                    fill="#E8D5FF"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Monitor Base */}
          <div className="mx-auto mt-3 w-40 h-3 bg-gray-900 rounded"></div>
        </div>
      </div>

      {/* Floating Icons */}
      {/* Checkmark Icon */}
      <div className="absolute top-20 left-20 z-20">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-8 h-8 text-purple-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Speech Bubble with 'i' */}
      <div className="absolute top-32 right-32 z-20">
        <div className="relative">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-purple-primary font-bold text-xl">i</span>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      </div>

      {/* Headphones Icon */}
      <div className="absolute top-48 left-12 z-20">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-8 h-8 text-purple-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        </div>
      </div>

      {/* Speech Bubble with dots */}
      <div className="absolute bottom-32 right-24 z-20">
        <div className="relative">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
              <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
              <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      </div>

      {/* Globe with 24 */}
      <div className="absolute bottom-48 left-24 z-20">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="text-center">
            <svg
              className="w-8 h-8 text-purple-primary mx-auto mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs font-bold text-purple-primary">24</span>
          </div>
        </div>
      </div>

      {/* Smartphone Icon */}
      <div className="absolute top-64 right-16 z-20">
        <div className="w-12 h-16 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-1">
          <div className="w-8 h-10 bg-purple-primary rounded flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Laptop Icon */}
      <div className="absolute bottom-20 left-16 z-20">
        <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-1">
          <div className="w-full h-8 bg-purple-primary rounded flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hand with Question Mark */}
      <div className="absolute top-80 left-32 z-20">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-purple-primary font-bold text-2xl">?</span>
        </div>
      </div>

      {/* Envelope Icon */}
      <div className="absolute bottom-64 right-32 z-20">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-8 h-8 text-purple-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-24 right-48 w-2 h-2 bg-purple-primary rounded-full opacity-50"></div>
      <div className="absolute bottom-40 left-48 w-3 h-3 bg-purple-primary rounded-full opacity-50"></div>
      <div className="absolute top-56 left-48 w-1 h-1 bg-purple-primary rounded-full opacity-50"></div>
      <div className="absolute bottom-56 right-48 w-2 h-2 bg-purple-primary rounded-full opacity-50"></div>
    </div>
  )
}

