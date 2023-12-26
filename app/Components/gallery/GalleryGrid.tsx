import GalleryImage from "./GalleryImage";

export default function GalleryGrid() {
  const images = [
    "https://images.unsplash.com/photo-1599837565318-67429bde7162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlciUyMHNldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyJTIwc2V0dXBzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyJTIwc2V0dXBzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1618424562492-f778e25652a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRldmVsb3BlciUyMHNldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1615788237135-b1e6454f77cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlciUyMHNldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1619250556999-38af9033f9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRldmVsb3BlciUyMHNldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRldmVsb3BlciUyMHNldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1693773852578-65cf594b62dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRldmVsb3BlciUyMHNldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGRldmVsb3BlciUyMHNldHVwc3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4 ">
        {images.map((image, index) => (
          <GalleryImage image={image} />
        ))}
      </div>
    </div>
  );
}
