$(document).ready(function () {
	$('#fs-frm').submit(function (e) {
		e.preventDefault();
		var formData = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: 'https://formspree.io/f/xwkgvnjl',
			data: formData,
			success: function (response) {
				$('#success-message').fadeIn().delay(3000).fadeOut(); // Показываем сообщение, затем скрываем его через 3 секунды
				$('#fs-frm')[0].reset(); // Очищаем форму после успешной отправки
			},
			error: function (xhr, status, error) {
				console.error(xhr.responseText);
			}
		});
	});
});