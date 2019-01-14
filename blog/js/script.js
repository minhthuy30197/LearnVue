var app = new Vue({
	el: '#post',
	data: {
		comment: '',
		username: '',
		email: '',
		post: {
			id: '1',
			title: 'Một chút suy ngẫm',
			content: 'Nếu có một thời điểm nào đó trong cuộc sống, mà chúng ta cần phải và nên bị dúi xuống bùn lầy tăm tối, tốt nhất hãy chọn lúc 18-25 tuổi, lúc mà bạn có cả sức khoẻ lẫn sự dẻo dai; cả hưng phấn lấn thất vọng; cả niềm tin sắt đã lẫn sự ngoan cố mù quáng; cả sự hiểu biết bằng bản năng và trực giác chưa bị pha tạp lẫn sự tăm tối vì mơ hồ nhận thấy những lực cản của xã hội. Nghĩa là có tất cả mà lại chẳng có gì vững chắc. Lúc ấy là lúc có cả một tiềm năng - cái năng lực tiềm ẩn trong từng cử động, từng quyết định nhỏ, cái khả năng có thể nhảy rất dài, vượt rất xa, thay đổi cả thế giới; hoặc là cái nguy cơ trượt xa khôn cùng xuống vực sâu của tăm tối, kiệt quệ, u uất và rệu rã. Tuổi trẻ - tự bản thân nó đã là một tài sản, tự bản thân nó đã hàm chữa ánh sáng và hạnh phúc, khi bị dúi xuống bùn, cơ hội để nó vẫn toả sáng và thăng hoa sẽ lớn hơn so với khi bạn già đi. Lúc đó là lúc phép thử còn mầu nhiệm, con tốt đỏ trong tay có thể còn phong Hậu; bạn có thời gian làm hậu thuẫn và chân trời vẫn còn gợi nhiều thôi thúc. Còn khi bạn đã lớn tuổi hơn, những xây xước đằng trước sẽ làm cho bạn ngần ngại, nếu bạn bị dúi xuống bùn thì rất có thể bạn sẽ tặc lưỡi nằm đó một mình, hoặc sẽ cố gắng vùng vẫy sao cho người khác cũng vấy bẩn lem luốc giống với bạn. Tuổi trẻ có một thứ vốn ngầm rất đáng quý mà không phải ai cũng biết: sự cô đơn. Trái tim là một giống loài dễ hư hỏng. Nếu nó được no đủ, nó sẽ đổ đốn ngay lập tức. Hạnh phúc làm cho con người ta mềm yếu, người ta vui tươi với mọi thứ, người ta quên mất việc phải làm, người ta còn bắt đầu tặc lưỡi nhiều hơn với những thói quen xấu. Tình yêu là một giống dây leo khó chiều. Nó cần được thử thách và bị tấn công. Nếu bạn mớm cơm cho nó hàng ngày, chăm sóc nó quá no đủ, nó sẽ chết yểu. Cô đơn ơi, tên của mi hàm chứa nghị lực. Nhưng sự cô đơn này không đơn thuần là “một mình” theo nghĩa đen của đúng từ này. Cô đơn là một trang thái tổng hoà rất đặc trưng của tuổi trẻ. Cô đơn vì thấy mình quá bé nhỏ, và ngộp thở trước sự rộng lớn của vũ trụ, của hàng hà tinh tú trên đầu mỗi đêm hè ta ngẩng lên. Cô đơn vì thấy mình bất lực trước một sinh vật ngang bằng mình, tồn tại cạnh mình, cần cho mình mà mình không sao sở hữu nổi nó. Cô đơn vì thấy có quá nhiều tiếng gọi mà không biết sẽ đi đâu. Cô đơn vị sự giằng xé giữa những ước mơ thời bé và những thực tế vừa mới đến. Cô đơn vì vừa buồn bã, vừa kiêu hãnh và khoái trá đi lại tung tăng, ngạo ngược trong thế giới riêng của mình, chỉ thỉnh thoảng hào phóng mời vào một hai vị khách, rồi lại mời họ ra ngoài để ta đóng cửa lại. “Hạnh phúc làm con người mềm yếu và quên mất việc phải làm”. Rất nhiều người đã nói thế. Rất nhiều người đã được dạy cần cảnh giác với hạnh phúc. Nhưng “việc phải làm” ấy là để làm gì, nếu không phải để mang lại hạnh phúc? Và mục đích cuối cùng của mọi việc là gì nếu không phải hạnh phúc? Vì thế có lẽ chăng nên nuôi dưỡng trái tim như nuôi con mèo dùng vào việc bắt chuột: để mặc nó đói, nó sẽ phải tìm đường săn mồi. Con mèo đói đến lúc săn được mồi đã quá hao sức vào việc săn, đã quá đói, nên nuốt vội con chuột mà quên mất hưởng thụ thành quả. Và con chuột (hạnh phúc) chui tuột vào dạ dày mà chẳng để lại dư vị gì. Trái tim là một con mèo, đừng thử thách hay tấn công nó nhiều quá. Nó sẽ tự tìm được một khoảnh sân để duỗi dài sưởi nắng.Trong cái sân nắng ây, có lẽ cô đơn không phải là người bạn tốt. Cô đơn - tên của nó hàm chứa sợ hãi. Bởi dù theo nghĩa nào đi chăng nữa, cô đơn có nghĩa là khoanh riêng mọt vùng đất cho mình, đặt tên cho nó là “tôi”, rồi xây lên một thành trì bao bọc. Mà đã xây thành, có nghĩa là đứng trước nỗi sợ xâm lăng. Cô đơn - tên của nó hàm chứa khổ đau. Bởi để giữ thành, thì phải chiến đấu. Nếu không giữ được đó là khổ đau. Nếu giữ được, thì một mình trong cái chiến thắng hoang tàn đó, chiến thắng trở nên 3 lần vô nghĩa. Cô đơn - tên của nó hàm chứa mất mát. Khi đã xây nên một thành trì khoanh thế giới của mình lại, có nghĩa là đã đánh mất thế giới bên ngoài kia. Mặc dù vậy, cô đơn dường nhu là một trạng thái mặc định cho mọi người. Tuy nhiên, cũng như một đưa trẻ chỉ lớn nếu cai sữa để ăn cơm, một người trẻ phải chối bỏ và thoát khỏi sự cô đơn để lớn lên. Nhưng trước khi chối bỏ, người đó phải ý thức được nó. Ngày xưa có một câu chuyện về người cha trong ngày sinh nhật của đứa con 3 tuổi. Đứa con khư khư giữ những quà tặng, không cho các bạn chơi cùng. Người cha quyết định dạy con mình biết chia sẻ bằng cách giật đồ chơi khỏi tay đưa con cho những đứa khác. Có một điều mà người cha đó quên: trước khi học cách chia sẻ, đứa bé phải học cách sở hữu. Người ta không thể cho đi cái gì người ta không có. Cũng vậy, người ta không thể thoát khỏi bức tường mà người ta không nhìn thấy. Thời gian để tự ý thức đó có thể là rất lâu. Để kiêu hãnh về thế-giới-riêng-tư không thể lặp lại của mình. Để thù địch với tất cả những gì không phải là nó. Để chiến đấu bảo vệ nó. Để thấy nó là chật hẹp và quyết tâm thoát khỏi. Thoát khỏi không có nghĩa là đánh mất, không có nghĩa là để cho thế giới của mình bị xâm lăng bời thế giới ngoại lai. Thoát khỏi có nghĩa là cho đi, là đem cái thế giới riêng tư ấy chia sẻ và hợp nhất với những thế giới khác thành một thế giới rộng lớn hơn. Thoát khỏi, có nghĩa là học cách sống với các sinh vật ngang bằng mình, tồn tại với mình, cần cho mình mà không đòi hỏi phải sở hữu. Những giấc mơ, khi đó, không mất đi. Chúng chỉ ít viển vông hơn. Khi đó người ta không còn mơ tung cánh giang hồ. Cô đơn có thể do khách quan hoặc chủ quan, nếu do khách quan thì đó quả thật là sự sợ hãi, khổ đau và mất mát. Nêu như cô đơn do tự ta tìm đến, nó sẽ không còn là sự sợ hãi khổ đau hay mất mát nữa. Nó sẽ là nơi mà thực sự cảm thấy an toàn, một nơi yên tĩnh vô cùng, nơi mà ta có thể bình tâm đánh giá mọi việc trên thế gian này, nơi mà ta có thể nhận thức được cái hay, cái dở …, và cũng có thể là nơi để tâm hồn ta chìm vào quên lãng. Và chính nhũng thời điểm như vậy, chúng ta sẽ cảm thấy lớn hơn rất nhiều, sẽ thay đổi cách nhìn của chúng ta về thế giới xung quanh, và sẽ trở nên hoàn thiện hơn rất nhiều.',
			author: 'Tôi là ai',
			timePublish: '20/10/2018',
			comments: [
				{
					commentId: 'c1',
					username: 'Ahihi',
					email: 'ahihi@gmail.com',
					content: 'I like this post'
				}
			]
		}
	},
	computed: {

	},
	methods: {
		UpdatePost: function() {
			console.log("Update")
		},
		DeletePost: function() {
			console.log("Delete")
		}
	}
})