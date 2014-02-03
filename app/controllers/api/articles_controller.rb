class Api::ArticlesController < ApplicationController
  skip_before_filter :restrict_access, only: :index
  respond_to :json

  def index
    # order(:createda_at)
    obj = []
    5.times do
    obj << {id: SecureRandom.hex,
            author: {name: 'Pablo Targa', id: 1},
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sodales lectus, at varius magna.",
            text: " + cebola\n + leite\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nisl auctor, auctor elit eget, auctor enim. Praesent at congue dui, egestas vestibulum diam. Aliquam eget eros vel orci adipiscing dictum. Integer sed lobortis est. Fusce consequat augue urna, non luctus lacus ornare vel. Etiam enim lacus, feugiat in nunc non, iaculis pulvinar augue. Praesent a adipiscing ante. Cras sollicitudin, mauris quis laoreet accumsan, urna felis eleifend odio, sit amet laoreet arcu purus ac felis. Aliquam pharetra dui vehicula pharetra dapibus. Integer hendrerit, nulla quis sollicitudin aliquet, dui libero fermentum nulla, et egestas felis purus sed ipsum. Vivamus dapibus est leo, sit amet volutpat diam tincidunt a. Pellentesque condimentum molestie leo fermentum suscipit. Cras ornare mi quis congue gravida. Sed vel nibh et urna varius convallis.\n\nPraesent ac diam scelerisque, convallis massa vel, vehicula odio. Pellentesque fermentum sem mollis ullamcorper imperdiet. Integer imperdiet euismod nisl, non mollis justo interdum eu. Vivamus rhoncus massa id diam posuere consectetur. Maecenas ut convallis nunc. Phasellus nulla lorem, rutrum sed mollis sed, feugiat eget sem. Maecenas auctor, orci non euismod mattis, justo sapien aliquam neque, vitae auctor sapien nisi id quam. Quisque rutrum eros magna, sed tincidunt quam ultrices a. Fusce tincidunt arcu sit amet mi rhoncus gravida. Cras arcu justo, mollis vitae augue non, sollicitudin mollis purus. Duis quis quam quis tortor rutrum tempus.\n\nPraesent imperdiet, tortor a porttitor sollicitudin, odio justo iaculis ipsum, ac tempor purus erat sit amet magna. Ut gravida sed turpis a porttitor. Fusce pellentesque tempor orci at euismod. Aliquam convallis orci augue, rutrum hendrerit mauris sagittis non. Pellentesque scelerisque erat at aliquet fermentum. Nunc quis interdum odio. Quisque auctor condimentum dui at eleifend. Nam hendrerit interdum elit, eu porta erat facilisis non. Vivamus vel dignissim nisl. Aenean viverra fringilla nibh non fringilla.\n\nAenean ornare erat auctor metus ornare fermentum. Cras vestibulum consequat euismod. Cras tempus massa sed congue ornare. Donec vel malesuada risus. In posuere lobortis augue sit amet commodo. Aenean pulvinar hendrerit leo eu gravida. Pellentesque at justo accumsan, eleifend dui nec, facilisis diam. Aenean posuere, ipsum vitae laoreet tempor, arcu nisi pharetra lectus, a malesuada lacus odio sed justo. Maecenas ac erat nec mi venenatis accumsan non vitae ipsum. Mauris ut nunc eget leo fringilla auctor. Vestibulum fermentum pulvinar leo, id tempus est laoreet eget. Cras mattis metus non odio vulputate laoreet.\n\nIn dignissim interdum ante et tristique. Etiam quis elit eget nisl fringilla viverra. Nunc eu mollis urna, ac laoreet lorem. Sed aliquam viverra odio, sit amet pellentesque velit facilisis in. Mauris magna urna, cursus vitae adipiscing eu, aliquam sed urna. Sed adipiscing pretium dapibus. Aliquam aliquet tempor adipiscing. Ut tristique tortor a hendrerit pretium. Phasellus consectetur lacus vitae mi posuere, a congue nunc rutrum.",
            color: ["#428bca", "#5cb85c", "#5bc0de", "#f0ad4e", "#d9534f"].sample,
            created_at: Time.now}
    end

    render json: obj
  end

  def create
  end

  def update
    Article.find(params[:id])
  end

  def destroy
    Article.find(params[:id])
  end

end
