<script lang="ts">export let hunt;</script>
<main>

    <div id="googleMap" style="width:100%;height:400px;overflow:visible;"></div>
    <div id="information">{hunt.latlong[0]} {hunt.latlong[1]}</div>
    <script lang="js">
        var coords = document.getElementById("information").innerText.split(" ")
        console.log(coords)
        function myMap() {
            var mapProp= {
            center:new google.maps.LatLng(coords[0], coords[1]),
            zoom:4,
            };
            var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }

    </script>

    <script src="https://maps.googleapis.com/maps/api/js?key={process.env.API_PWD}&callback=myMap"></script>

</main>