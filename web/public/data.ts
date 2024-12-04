const data = {
  orders: [
    {
      id: 2, 
      dateCreated: '2024-12-12', 
      status: 'Waiting' , 
      products: [
        {
          quantity: 4, 
          barcode: "1", 
          description: "Áo thun ngắn Relaxed Spir", 
          gender: "Nam", 
          idCatergory: 1, 
          imageAlbum: [
            "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/0014-spir1s.jpg?v=1722995877620"
          ], 
          name: "Áo thun ngắn Relaxed Spir", 
          price: 288000, 
          size: 'S',
        }, 
        {
          quantity: 2, 
          barcode: "2", 
          description: "Áo thun ngắn Relaxed Marilyn", 
          gender: "Nam", 
          idCatergory: 1, 
          imageAlbum: [
            "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/0012-marilyn1s.jpg?v=1722996910463"
          ], 
          name: "Áo thun ngắn Relaxed Marilyn", 
          price: 100000, 
          size: 'S',
        }, 
      ]
    }, 
    {
      id: 1, 
      dateCreated: '2024-12-12', 
      status: 'Waiting' , 
      products: [
        {
          quantity: 4, 
          barcode: "1", 
          description: "Áo thun ngắn Relaxed Spir", 
          gender: "Nam", 
          idCatergory: 1, 
          imageAlbum: [
            "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/0014-spir1s.jpg?v=1722995877620"
          ], 
          name: "Áo thun ngắn Relaxed Spir", 
          price: 288000, 
          details: [
            {
              productBarcode: '1',
              size: 'S',
              quantity: '10'
            }, 
          ]
        }, 
        {
          quantity: 2, 
          barcode: "2", 
          description: "Áo thun ngắn Relaxed Marilyn", 
          gender: "Nam", 
          idCatergory: 1, 
          imageAlbum: [
            "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/0012-marilyn1s.jpg?v=1722996910463"
          ], 
          name: "Áo thun ngắn Relaxed Marilyn", 
          price: 100000, 
          details: [
            {
              productBarcode: '1',
              size: 'S',
              quantity: '10'
            }, 
          ]
        }, 
      ]
    }, 
  ], 
  users: [
    {
      id: '1', 
      avatar: '1', 
      name: 'Le Trong Nghia', 
      password: '123', 
      phone: '0932659945', 
      email: 'leetrongjnghiax0938225745@gmail.com', 
      gender: 'male', 
      birthday: '2002-07-03', 
      timeCreate: '2024-01-01', 
      shoppingPoint: 0, 
      status: 'active', 
      role: '1', 
      address: {
        street: 'Dinh Bo Linh', 
        district: 'Binh Thanh', 
        ward: 24, 
      }
    }
  ], 
  products: [
    {
      barcode: "1", 
      description: "Áo thun ngắn Relaxed Spir", 
      gender: "Nam", 
      idCatergory: 1, 
      imageAlbum: [
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/0014-spir1s.jpg?v=1722995877620"
      ], 
      name: "Áo thun ngắn Relaxed Spir", 
      price: 288000, 
      details: [
        {
          productBarcode: '1',
          size: 'S',
          quantity: '10'
        }, 
        {
          productBarcode: '2',
          size: 'L',
          quantity: '10'
        }, 
      ]
    }, 
    {
      barcode: "2", 
      description: "Áo thun ngắn Relaxed Marilyn", 
      gender: "Nam", 
      idCatergory: 1, 
      imageAlbum: [
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/0012-marilyn1s.jpg?v=1722996910463"
      ], 
      name: "Áo thun ngắn Relaxed Marilyn", 
      price: 100000, 
      details: [
        {
          productBarcode: '1',
          size: 'S',
          quantity: '10'
        }, 
        {
          productBarcode: '2',
          size: 'L',
          quantity: '10'
        }, 
      ]
    }, 
    {
      barcode: "3", 
      description: "Áo thun ngắn Regular Gumball", 
      gender: "Nam", 
      idCatergory: 1, 
      imageAlbum: [
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/gumbal-2.jpg?v=1716953964637"
      ], 
      name: "Áo thun ngắn Regular Gumball", 
      price: 100000, 
      details: [
        {
          productBarcode: '1',
          size: 'S',
          quantity: '10'
        }, 
        {
          productBarcode: '2',
          size: 'L',
          quantity: '10'
        }, 
      ]
    }, 
    {
      barcode: "4", 
      description: "Áo thun ngắn Regular Tan", 
      gender: "Nam", 
      idCatergory: 1, 
      imageAlbum: [
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/6-9522b0df-0d4c-4b6a-ac5f-67344a77bc78.jpg?v=1715230751453"
      ], 
      name: "Áo thun ngắn Regular Tan", 
      price: 252000, 
      details: [
        {
          productBarcode: '1',
          size: 'S',
          quantity: '10'
        }, 
        {
          productBarcode: '2',
          size: 'L',
          quantity: '10'
        }, 
      ]
    }, 
    {
      barcode: "5", 
      description: "Áo thun dài Regular Stin", 
      gender: "Nam", 
      idCatergory: 1, 
      imageAlbum: [
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/fapas-310124-5-1-fix-4a2c5621-24b8-4b70-ab42-04618f90d5c4.jpg?v=1707194606837"
      ], 
      name: "Áo thun dài Regular Stin", 
      price: 252000, 
      details: [
        {
          productBarcode: '1',
          size: 'S',
          quantity: '10'
        }, 
        {
          productBarcode: '2',
          size: 'L',
          quantity: '10'
        }, 
      ]
    }, 
  ], 
  cart: [
    {
      barcode: "1", 
      quantity: 1, 
    }, 
    {
      barcode: "2", 
      quantity: 3, 
    }, 
  ], 
  news: [
    {
      id: "1", 
      title: "10 BÍ QUYẾT THỜI TRANG GIÚP BẠN TRỞ NÊN SÀNH ĐIỆU, THỜI THƯỢNG HƠN", 
      time: new Date(), 
      content: `<p><img alt="10 BÍ QUYẾT THỜI TRANG GIÚP BẠN TRỞ NÊN SÀNH ĐIỆU, THỜI THƯỢNG HƠN" src="https://bizweb.dktcdn.net/100/396/594/articles/4.jpg?v=1728468634567" /></p>

<h1>10 B&Iacute; QUYẾT THỜI TRANG GI&Uacute;P BẠN TRỞ N&Ecirc;N S&Agrave;NH ĐIỆU, THỜI THƯỢNG HƠN</h1>

<p>Nguyễn Thị Bảo Anh</p>

<p>Thứ Tư, 09/10/20246 ph&uacute;t đọc</p>

<p>Nội dung b&agrave;i viết</p>

<ol>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#mang-trang-ph-c-ng-k-ch-c">Mang trang phục đ&uacute;ng k&iacute;ch cỡ</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#bi-t-c-ch-ph-i-layer">Biết c&aacute;ch phối layer</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#k-t-h-p-v-i-ph-ki-n">Kết hợp với phụ kiện</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#ch-n-ch-t-li-u-trang-ph-c">Ch&uacute; &yacute; đến chất liệu trang phục</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#bi-t-c-ch-ph-i-c-c-m-u-h-i-h-a-v-i-nhau">Biết c&aacute;ch phối c&aacute;c m&agrave;u h&agrave;i h&ograve;a với nhau</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#h-y-t-tin">H&atilde;y tự tin</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#ch-m-s-c-b-n-th-n">Chăm s&oacute;c bản th&acirc;n</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#t-m-hi-u-v-th-i-trang">T&igrave;m hiểu về thời trang</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#kh-ng-o-qu-n-nh-n-nh-m">Kh&ocirc;ng để &aacute;o quần nhăn nh&uacute;m</a></li>
	<li><a href="https://fapas.vn/10-bi-quyet-thoi-trang-giup-ban-tro-nen-sanh-dieu-thoi-thuong-hon#hi-u-r-b-n-th-n">Hiểu R&otilde; Bản Th&acirc;n</a></li>
</ol>

<p>Để c&oacute; được một diện mạo chỉn chu, bạn kh&ocirc;ng chỉ cần hiểu r&otilde; bản th&acirc;n m&igrave;nh v&agrave; lựa chọn trang phục ph&ugrave; hợp, m&agrave; c&ograve;n nắm bắt những b&iacute; quyết thời trang tinh tế v&agrave; biết c&aacute;ch phối đồ sao cho s&agrave;nh điệu, thời thượng. Nếu bạn đang muốn thay đổi phong c&aacute;ch c&aacute; nh&acirc;n th&igrave; h&atilde;y c&ugrave;ng FAPAS kh&aacute;m ph&aacute; 10 tips gi&uacute;p bạn n&acirc;ng tầm phong c&aacute;ch gu thời trang nam của m&igrave;nh nh&eacute;!&nbsp;</p>

<h1><strong>Mang trang phục đ&uacute;ng k&iacute;ch cỡ &nbsp;</strong></h1>

<p>Điều quan trọng đầu ti&ecirc;n để bản th&acirc;n trở n&ecirc;n thời trang, s&agrave;nh điệu hơn l&agrave; hiểu r&otilde; được c&aacute;ch chọn trang phục thời trang ph&ugrave; hợp, đ&uacute;ng với form d&aacute;ng của m&igrave;nh. D&ugrave; bạn c&oacute; y&ecirc;u th&iacute;ch kiểu d&aacute;ng hay m&agrave;u sắc của &ldquo;item&rdquo; đ&oacute; đến đ&acirc;u, nếu m&oacute;n đồ đ&oacute; kh&ocirc;ng vừa vặn với form d&aacute;ng th&igrave; trang phục đ&oacute; sẽ l&agrave;m mất đi vẻ s&agrave;nh điệu, c&acirc;n đối. Một chiếc &aacute;o qu&aacute; rộng hoặc quần qu&aacute; chật sẽ đem lại cảm gi&aacute;c kh&ocirc;ng thoải m&aacute;i khi mặc m&agrave; c&ograve;n l&agrave;m mất đi sự tinh tế. Vậy n&ecirc;n bạn cần biết form d&aacute;ng v&agrave; số đo ch&iacute;nh x&aacute;c của m&igrave;nh để chọn trang phục ph&ugrave; hợp nhất.&nbsp;</p>

<h1><strong>Biết c&aacute;ch phối layer</strong></h1>

<p>Phối trang phục layer l&agrave; c&aacute;ch tuyệt vời để bạn tạo n&ecirc;n những bộ trang phục s&aacute;ng tạo v&agrave; tao th&ecirc;m chiều s&acirc;u hơn cho outfit. Bạn c&oacute; thể phối layer theo nhiều c&aacute;ch kh&aacute;c nhau nhưng điển h&igrave;nh nhất l&agrave; phối layer với hai item c&ugrave;ng gam m&agrave;u trung t&iacute;nh như trắng, be c&ugrave;ng nhau v&agrave; mặc lớp &aacute;o mỏng b&ecirc;n trong v&agrave; mang chiếc &aacute;o d&agrave;y hơn ở ngo&agrave;i. Ngo&agrave;i ra, bạn cần đưa những những chi tiết nổi bật như h&igrave;nh th&ecirc;u hay họa tiết ra ngo&agrave;i. Điều đ&oacute; sẽ l&agrave;m outfit của bạn tr&ocirc;ng nổi bật hơn một c&aacute;ch tinh tế.&nbsp;</p>

<h1><strong>Kết hợp với phụ kiện &nbsp; &nbsp;</strong></h1>

<p>Một trong những &ldquo;item&rdquo; kh&ocirc;ng thể thiếu trong tủ đồ của bạn v&agrave; gi&uacute;p bạn trở n&ecirc;n phong c&aacute;ch v&agrave; s&agrave;nh điệu hơn l&agrave; đ&oacute; ch&iacute;nh l&agrave; phụ kiện. Đ&acirc;y l&agrave; c&aacute;ch để bạn thể hiện c&aacute; t&iacute;nh v&agrave; gi&uacute;p tạo điểm nhấn cho outfit của bạn ấn tượng hơn. Đ&oacute; c&oacute; thể l&agrave; chiếc n&oacute;n, sợi d&acirc;y chuyền hay chiếc đồng hồ đầy lịch l&atilde;m. Tuy nhi&ecirc;n, khi phối trang phục với phụ kiện, bạn h&atilde;y nhớ nguy&ecirc;n tắc &quot;&iacute;t l&agrave; nhiều&quot; để tạo điểm nhấn ho&agrave;n hảo, n&acirc;ng tầm trang phục m&agrave; kh&ocirc;ng g&acirc;y cảm gi&aacute;c rối mắt.&nbsp;</p>

<p><img src="https://bizweb.dktcdn.net/100/396/594/files/3-1.jpg?v=1728467363842" /></p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Tham khảo n&oacute;n Courage tại đ&acirc;y:<a href="https://fapas.vn/non-courage-1">&nbsp;https://fapas.vn/non-courage-1</a></p>

<h1><strong>Ch&uacute; &yacute; đến chất liệu trang phục</strong></h1>

<p>Một trong những b&iacute; quyết mặc đẹp, thời thượng kh&ocirc;ng thể bỏ qua đ&oacute; ch&iacute;nh l&agrave; việc lựa chọn kỹ lưỡng đến chất liệu trang phục. D&ugrave; chỉ phối với những &ldquo;item&rdquo; đơn giản nhưng được l&agrave;m bằng chất liệu tốt kh&ocirc;ng chỉ gi&uacute;p bạn thể hiện được phong c&aacute;ch thời trang tinh tế m&agrave; c&ograve;n mang lại hiệu ứng mạnh về mặt thị gi&aacute;c. Bạn c&oacute; thể mix &amp; match c&ugrave;ng chiếc &aacute;o thun chất vải cotton cao cấp, tho&aacute;ng m&aacute;t với gam trắng c&ugrave;ng kho&aacute;c &aacute;o v&agrave; quần jeans c&ugrave;ng đ&ocirc;i gi&agrave;y sneaker năng động, c&aacute; t&iacute;nh.&nbsp;</p>

<p><img src="https://bizweb.dktcdn.net/100/396/594/files/4-c1d46c55-56ca-4ce8-b747-b5183f7c7026.jpg?v=1728467796423" />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tham khảo sản phẩm tại đ&acirc;y:<a href="https://fapas.vn/ao-thun-ngan-regular-tan">&nbsp;https://fapas.vn/ao-thun-ngan-regular-tan</a>&nbsp;</p>

<h1><strong>Biết c&aacute;ch phối c&aacute;c m&agrave;u h&agrave;i h&ograve;a với nhau</strong></h1>

<p>M&agrave;u sắc l&agrave; một trong những yếu tố gi&uacute;p phong c&aacute;ch thời trang của bạn trở n&ecirc;n nổi bật hơn. M&agrave;u sắc l&agrave; một c&aacute;ch để bạn thể hiện c&aacute; t&iacute;nh ri&ecirc;ng của bản th&acirc;n v&agrave; gi&uacute;p bạn l&agrave;m nổi bật l&ecirc;n gu ăn mặc thời thượng của m&igrave;nh. Bạn c&oacute; thể phối outfit của m&igrave;nh c&ugrave;ng gam m&agrave;u hoặc tương phản đầy s&aacute;ng tạo. Một số quy tắc phối m&agrave;u cơ bản m&agrave; bạn c&oacute; thể tham khảo như phối m&agrave;u đối lập như m&agrave;u đen v&agrave; m&agrave;u trắng, phối m&agrave;u bổ sung như xanh l&aacute; v&agrave; m&agrave;u đỏ cam, hoặc phối c&aacute;c gam m&agrave;u trung t&iacute;nh như m&agrave;u trắng để tạo n&ecirc;n sự thanh lịch v&agrave; thời thượng.</p>

<h1><strong>H&atilde;y tự tin</strong></h1>

<p>Với phong th&aacute;i tự tin, d&ugrave; bạn mang trang phục n&agrave;o cũng sẽ trở n&ecirc;n thu h&uacute;t, ấn tượng hơn. H&atilde;y tin tưởng v&agrave;o phong c&aacute;ch c&aacute; nh&acirc;n v&agrave; mạnh dạn thể hiện c&aacute;ch t&iacute;nh của m&igrave;nh qua những trang phục khiến bạn cảm thấy thoải m&aacute;i nhất. Việc bạn l&agrave; lu&ocirc;n l&agrave; ch&iacute;nh m&igrave;nh v&agrave;&nbsp; mang l&ecirc;n những trang phục m&agrave; bạn y&ecirc;u th&iacute;ch sẽ gi&uacute;p bạn tự tin hơn.&nbsp;</p>

<p><img src="https://bizweb.dktcdn.net/100/396/594/files/6-2-f0ead5a0-3cc8-43c8-83ed-72cc49507a4d.jpg?v=1728468288644" /></p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Tham khảo sản phẩm tại đ&acirc;y:<a href="https://fapas.vn/ao-tanktop-relaxed-mesh-dunker">&nbsp;https://fapas.vn/ao-tanktop-relaxed-mesh-dunker&nbsp;</a></p>

<h1><strong>Chăm s&oacute;c bản th&acirc;n</strong></h1>

<p>Để c&oacute; một vẻ ngo&agrave;i chỉn chu, s&agrave;nh điệu kh&ocirc;ng chỉ ch&uacute; &yacute; đến việc đầu tư v&agrave;o trang phục m&agrave; c&ograve;n l&agrave; việc chăm s&oacute;c bản th&acirc;n từ b&ecirc;n trong. Một cơ thể khỏe mạnh, một v&oacute;c d&aacute;ng c&acirc;n đối sẽ gi&uacute;p bạn dễ d&agrave;ng chọn lựa trang phục v&agrave; l&agrave;m nổi bật phong c&aacute;ch ri&ecirc;ng của m&igrave;nh.</p>

<h1><strong>T&igrave;m hiểu về thời trang&nbsp;</strong></h1>

<p>Để trở n&ecirc;n s&agrave;nh điệu, việc cập nhật những xu hướng hay những kiến thức thời trang l&agrave; điều kh&ocirc;ng thể thiếu. Bạn c&oacute; thể t&igrave;m hiểu thời trang th&ocirc;ng qua mạng x&atilde; hội, đọc tạp ch&iacute;, tham gia triển l&atilde;m thời trang hay thậm ch&iacute; l&agrave; follow những fashionista nổi tiếng. Chỉ những điều đơn giản như vậy th&ocirc;i nhưng cũng c&oacute; thể gi&uacute;p bạn n&acirc;ng tầm phong c&aacute;ch s&agrave;nh điệu hơn, hiện đại hơn.</p>

<h1><strong>Kh&ocirc;ng để &aacute;o quần nhăn nh&uacute;m</strong></h1>

<p>D&ugrave; trang phục c&oacute; đẹp ra sao hay thời thượng như thế n&agrave;o cũng sẽ bị mất đi vẻ đẹp vốn c&oacute; nếu bị nhăn nh&uacute;m. Việc ủi đồ sẽ gi&uacute;p trang phục của bạn tr&ocirc;ng gọn g&agrave;ng, chỉn chu hơn m&agrave; c&ograve;n thể hiện sự t&ocirc;n trọng bản th&acirc;n v&agrave; người đối diện. Đặc biệt với c&aacute;c chất liệu dễ nhăn như lụa, linen, h&atilde;y đảm bảo bạn lu&ocirc;n l&agrave; phẳng trước khi mặc.</p>

<h1><strong>Hiểu R&otilde; Bản Th&acirc;n</strong></h1>

<p>Điều cuối c&ugrave;ng quan trọng nhất ch&iacute;nh l&agrave; hiểu r&otilde; bản th&acirc;n. Mỗi người ch&uacute;ng ta đều c&oacute; form d&aacute;ng ri&ecirc;ng, sở th&iacute;ch ri&ecirc;ng, phong c&aacute;ch v&agrave; c&aacute;ch t&iacute;nh ri&ecirc;ng. Biết được điểm mạnh v&agrave; điểm yếu của m&igrave;nh như thế n&agrave;o v&agrave; hiểu r&otilde; bản th&acirc;n sẽ gi&uacute;p bạn trở n&ecirc;n s&agrave;nh điệu hơn, thời thượng hơn.&nbsp;</p>

<p>Thời trang kh&ocirc;ng chỉ l&agrave; việc mặc l&ecirc;n m&igrave;nh những bộ đồ mới nhất, s&agrave;nh điệu nhất m&agrave; c&ograve;n l&agrave; c&aacute;ch để bạn thể hiện c&aacute; t&iacute;nh ri&ecirc;ng. FAPAS hy vọng với 10 b&iacute; k&iacute;p thời trang n&agrave;y sẽ gi&uacute;p bạn trở n&ecirc;n tự tin hơn, s&agrave;nh điệu v&agrave; thời thượng hơn.&nbsp;</p>
`, 
    }, 
  ], 
}

export default data;