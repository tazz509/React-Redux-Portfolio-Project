class Event < ApplicationRecord

  belongs_to :user

  before_create :set_image, :set_background, :set_bordercolor

  Pictures = ["https://i.imgur.com/XXO40qQ.jpg", "https://i.imgur.com/zihFobu.jpg", "https://i.imgur.com/fbbqGVv.jpg", "https://i.imgur.com/peilfAh.jpg", "https://i.imgur.com/VFVMbAa.jpg", "https://i.imgur.com/4RfSFb4.jpg", "https://i.imgur.com/D3DnS6r.jpg", "https://i.imgur.com/LetgWey.jpg"]
  
  def set_image
    self.image = Pictures[rand(Pictures.length)]
    # self.image = RandomImages::Image.get
    # suckr = ImageSuckr::GoogleSuckr.new
    # self.image = suckr.get_image_url
  end

  def set_background
    color = "%06x" % (rand * 0xffffff)
    self.background = "#" + color
  end

  def set_bordercolor
    color = "%06x" % (rand * 0xffffff)
    self.bordercolor = "#" + color
  end


end
