<?php

require APPPATH.'libraries/REST_Controller.php';

class General_Domicil extends REST_Controller{

    public function __construct(){
        parent::__construct();
        //load database
        $this->load->database();
        $this->load->model(array("api/General_Domicile_model"));
        $this->load->library(array("form_validation"));
        $this->load->helper("security");
    }
    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $gdomicile = $this->General_Domicile_model->get_statsEquipeGeneralDomicile();

        //print_r($query->result());

        if(count($gdomicile) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "General Domicile found",
            "data" => $gdomicile
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No General Domicile found",
            "data" => $gdomicile
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>