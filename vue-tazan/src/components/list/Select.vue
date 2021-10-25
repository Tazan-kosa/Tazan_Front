<template>
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <form class="row">
            <!-- <div class="col">
                <div class="input-group-icon">
                    <input class="form-control input-box form-therichpost-control" id="inputAddress1" type="text" placeholder="From where" />
                    <span class="nav-link-icon text-800 fs--1 input-box-icon"><i class="fas fa-map-marker-alt"></i></span>
                </div>
            </div>
            <div class="col">
                <div class="input-group-icon">
                    <input class="form-control input-box form-therichpost-control" id="inputAddress2" type="text" placeholder="To where" />
                    <span class="nav-link-icon text-800 fs--1 input-box-icon"><i class="fas fa-map-marker-alt"></i></span>
                </div>
            </div> -->
            
            <div class="col-5">
                <div class="input-group-icon">
                    <input class="form-control input-box form-therichpost-control" id="inputdateOne" type="date" />
                    <span class="nav-link-icon text-800 fs--1 input-box-icon"><i class="fas fa-calendar"></i></span>
                </div>
            </div>
            <div class="col-5">
                <div class="input-group-icon">
                    <input class="form-control input-box form-therichpost-control" id="inputDateTwo" type="date" />
                    <span class="nav-link-icon text-800 fs--1 input-box-icon"><i class="fas fa-calendar"></i></span>
                </div>
            </div>
            <div class="col-12 col-xl-10 col-lg-12 d-grid mt-6"><button class="btn btn-secondary" type="submit">Search
                    Packages</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
form{
 
 
}

</style>