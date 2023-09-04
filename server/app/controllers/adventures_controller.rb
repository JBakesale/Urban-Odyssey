class AdventuresController < ApplicationController
  def index 
    # adventures = Adventure.all
    
    adventures = [
      {
        id: 1,
        latitude: 49.2827,
        longitude: -123.1207,
        imageUrl: 'https://th.bing.com/th/id/OIP.GDW4NiEmbTNvLa9eQoCGCQHaE6?pid=ImgDet&rs=1', 
        description: 'Explore the stunning landscapes of Vancouver on this scenic hike.',
        difficulty: 'Moderate',
      },
      {
        id: 2,
        latitude: 49.2827,
        longitude: -123.1250,
        imageUrl: 'https://www.insidevancouver.ca/wp-content/uploads/2019/09/07012_201709_DevinManky_Grouse-MountainBikeMountain-BikingSummer-664x443.jpg', 
        description: 'Experience adrenaline-pumping mountain biking trails near Vancouver.',
        difficulty: 'Challenging',
      },
      {
        id: 3,
        latitude: 49.2827,
        longitude: -123.1150,
        imageUrl: 'https://th.bing.com/th/id/R.8c19d0b9e798499bb05b2ba72c9a1a47?rik=CswC3v%2fvu238tw&riu=http%3a%2f%2fwww.realadventures.com%2flistingimages%2f1021%2f1021299%2fl_1021299h.jpg&ehk=8q9TPGbM8DEEzMrWUCK8Tu%2bW%2f2LaSq6t9qZZLGTFGz4%3d&risl=&pid=ImgRaw&r=0', 
        description: 'Kayak through the pristine waters of Vancouver Island.',
        difficulty: 'Easy',
      },
    ];


    render json: adventures
  end
end
