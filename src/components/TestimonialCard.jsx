const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card-glow p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-ink rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-bold text-gold">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-ivory">{testimonial.author}</h4>
          <p className="text-[#f5f0e3]/70 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-[#f5f0e3]/90 italic">"{testimonial.content}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-gold">★</span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;