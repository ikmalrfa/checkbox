<script src="https://code.jquery.com/jquery-3.4.1.min.js">
    </script>
    <script src="https://kit.fontawesome.com/dd8c49730d.js" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function () {
            $(".checkbox").click(function () {
                $(this).parents(".item").toggleClass("active");
            })
        });
    </script>
