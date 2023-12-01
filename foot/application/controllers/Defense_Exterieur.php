<?php

require APPPATH.'libraries/REST_Controller.php';

class Defense_Exterieur extends REST_Controller{

    public function __construct(){
    parent::__construct();
    //load database
    $this->load->database();
    $this->load->model(array("api/Defense_Exterieur_model"));
    $this->load->library(array("form_validation"));
    $this->load->helper("security");
    }
    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $dexterieur = $this->Defense_Exterieur_model->get_statsEquipeDefenseExterieur();
        // $students = $this->student_model->get_students();
        //print_r($query->result());

        if(count($dexterieur) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "Defense Exterieur found",
            "data" => $dexterieur
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No Defense Exterieur found",
            "data" => $dexterieur
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>