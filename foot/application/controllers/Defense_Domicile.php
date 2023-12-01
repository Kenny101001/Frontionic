<?php

require APPPATH.'libraries/REST_Controller.php';

class Defense_Domicile extends REST_Controller{

    public function __construct(){
    parent::__construct();
    //load database
    $this->load->database();
    $this->load->model(array("api/Defense_Domicile_model"));
    $this->load->library(array("form_validation"));
    $this->load->helper("security");
    }
    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $ddomicile = $this->Defense_Domicile_model->get_statsEquipeDefenseDomicile();
        // $students = $this->student_model->get_students();
        //print_r($query->result());

        if(count($ddomicile) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "Defense Domicile found",
            "data" => $ddomicile
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No Defense Domicile found",
            "data" => $ddomicile
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>